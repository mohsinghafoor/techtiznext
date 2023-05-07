/** @type {import('next').NextConfig} */
module.exports= {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  "paths": {
    "react": [ "./node_modules/@types/react" ]
    }
}

