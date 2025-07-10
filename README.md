# Mini URL Shortener API (ORO Backend Assignment)

A RESTful URL Shortener API built with Node.js, Express.js, and MongoDB.

##  Features

- Shortens long URLs into unique short codes
- Redirects to original URL via `GET /:code`
- Tracks click counts
- Supports optional expiration dates
- Basic rate limiting to prevent abuse
- Clean error handling and input validation

---

## Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose
- **Utils**: `nanoid`, `valid-url`, `express-rate-limit`, `dotenv`

---

## Installation

```bash
git clone https://github.com/<your-username>/url-shortener-orocorp.git
cd url-shortener-orocorp
npm install
cp .env.example .env  # or create a .env file manually
npm run dev
