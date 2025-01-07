import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: {
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,
      // Enable SSR support
      ssr: true,
      // Optional
      fileName: false
    }
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bikes",
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.bikeindex.org",
        port: "",
        pathname: "/uploads/**"
      },
      {
        protocol: "https",
        hostname: "bikebook.s3.amazonaws.com",
        port: "",
        pathname: "/uploads/**"
      }
    ]
  }
}

export default nextConfig
