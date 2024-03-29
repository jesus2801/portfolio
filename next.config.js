const nextBuildId = require('next-build-id');

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};
