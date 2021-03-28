const nextBuildId = require('next-build-id');

module.exports = {
  async headers() {
    return [
      {
        source: '/static/abstract/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000',
          },
        ],
      },
      {
        source: '/static/abstract/(.*).webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000',
          },
        ],
      },
      {
        source: '/static/icons/(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000',
          },
        ],
      },
      {
        source: '/static/icons/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000',
          },
        ],
      },
      {
        source: '/static/images/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000',
          },
        ],
      },
      {
        source: '/static/laptops-preview/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000',
          },
        ],
      },
    ];
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  trailingSlash: true,
};
