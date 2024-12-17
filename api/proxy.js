// api/proxy.js

import { createProxyMiddleware } from 'http-proxy-middleware';

export default async function handler(req, res) {
  const { createProxyMiddleware } = await import('http-proxy-middleware');

  const proxy = createProxyMiddleware({
    target: 'http://localhost:3001', // Your target server
    changeOrigin: true,
    pathRewrite: { '^/api': '' }, // Remove `/api` prefix
  });

  return proxy(req, res);
}
