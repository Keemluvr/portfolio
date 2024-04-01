const { withPlaiceholder } = require("@plaiceholder/next");

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withPlaiceholder(
  withNextIntl({
    trailingSlash: false,
    compress: true,
    env: {
      ENVIRONMENT: process.env.ENVIRONMENT,
      INITIAL_PATH_URL: process.env.NEXT_PUBLIC_INITIAL_PATH_URL,
    }
  })
);

module.exports = nextConfig;
