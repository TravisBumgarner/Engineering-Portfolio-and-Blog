// @ts-check
import createMDX from '@next/mdx';


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone', // for docker
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
