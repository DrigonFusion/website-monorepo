/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import createMDX from '@next/mdx'
import rehypeExpressiveCode from 'rehype-expressive-code'

/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
const rehypeExpressiveCodeOptions = {
  // You can add configuration options here
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      // The nested array structure is required to pass options
      // to a rehype plugin
      [rehypeExpressiveCode, rehypeExpressiveCodeOptions],
    ],
  },
})

export default withMDX(nextConfig)