// @ts-check
import createMDX from '@next/mdx';


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
