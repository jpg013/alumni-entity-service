const crypto = require('../common/crypto');

const getRequestBearerToken = headers => {
  return headers['authorization'];
}

function isAccessible(req, res, next) {
  const token = getRequestBearerToken(req.headers);
  if (!token) {
    return res.status(401);
  }
  
}

module.exports = {
  isAccessible
};
