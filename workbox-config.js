module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,js,css,png,svg,json}'
  ],
  swDest: 'dist/sw.js',
  clientsClaim: true,
  skipWaiting: true,
  navigateFallback: '/index.html',
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024
};
