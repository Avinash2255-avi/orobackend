const Url = require('../models/Url')
const nanoid = require('../utils/generateCode')
const isValidUrl = require('../utils/validateUrl')

const baseUrl = process.env.BASE_URL || 'http://localhost:5000'

exports.shortenUrl = async (req, res) => {
  const { url, expiresInDays } = req.body

  if (!url || !isValidUrl(url)) {
    return res.status(400).json({ error: 'Invalid URL format' })
  }

  const shortCode = nanoid()
  const expiresAt = expiresInDays ? new Date(Date.now() + expiresInDays * 86400000) : null

  try {
    const newUrl = await Url.create({
      originalUrl: url,
      shortCode,
      expiresAt
    })

    return res.status(201).json({ shortUrl: `${baseUrl}/${shortCode}` })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
}

exports.redirectUrl = async (req, res) => {
  const { code } = req.params

  try {
    const urlEntry = await Url.findOne({ shortCode: code })

    if (!urlEntry || (urlEntry.expiresAt && urlEntry.expiresAt < new Date())) {
      return res.status(404).json({ error: 'URL not found or expired' })
    }

    urlEntry.clicks += 1
    await urlEntry.save()

    return res.redirect(urlEntry.originalUrl)
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
}
