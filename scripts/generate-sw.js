// Node script to generate a service worker using workbox-build
const workboxBuild = require('workbox-build');

const buildSw = () => {
  // Adjust globDirectory and swDest to match your build output
  return workboxBuild.generateSW({
    globDirectory: 'dist',
    globPatterns: [
      '**/*.{html,js,css,png,svg,json}'
    ],
    swDest: 'dist/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    navigateFallback: '/index.html'
  }).then(({count, size, warnings}) => {
    warnings.forEach(console.warn);
    console.log(`Generated dist/sw.js, which will precache ${count} files, totaling ${size} bytes.`);
  });
};

buildSw().catch((err) => {
  console.error('Failed to generate service worker:', err);
  process.exit(1);
});
