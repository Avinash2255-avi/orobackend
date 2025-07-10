const express = require('express')
const router = express.Router()
const rateLimit = require('express-rate-limit')
const { shortenUrl, redirectUrl } = require('../controllers/urlController')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many requests, try again later.'
})

router.post('/shorten', limiter, shortenUrl)
router.get('/:code', redirectUrl)

module.exports = router
