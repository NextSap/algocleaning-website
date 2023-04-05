/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    EMAILFROM: process.env.EMAILFROM,
    EMAILTO: process.env.EMAILTO,
    PASSWORD: process.env.PASSWORD,
    SERVICE: process.env.SERVICE,
    SMTPHOST: process.env.SMTPHOST,
    SMTPPORT: process.env.SMTPPORT,
  }
}

module.exports = nextConfig
