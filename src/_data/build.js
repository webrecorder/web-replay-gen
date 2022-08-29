module.exports = function () {
  return {
    environment: process.env.WRG_ENVIRONMENT || 'development',
  };
};
