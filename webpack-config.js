const crypto_browserify = require('crypto-browserify');
const querystring_es3 = require('querystring-es3');

module.exports = {
  resolve: {
    fallback: {
        "crypto": require.resolve(crypto_browserify) ,
        'querystring': require.resolve(querystring_es3),
    },
  },
};
