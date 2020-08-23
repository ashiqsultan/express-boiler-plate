// const jwt = require('jsonwebtoken');
const config = require('../../config');

// JWT secret key
// const secretKey = config.secretKey;

// KEY, the token should be sent in the request header with this key
// const jwtKeyHeader = config.jwtKeyHeader;

/* 
The functionality of this middleware is to get the token from the header and check its valiidity.
* Get the payload from the JWT token
* And the necessary payloads to the request to process in the controllers
*/

module.exports = async function (req, res, next) {
  // Get token from header
  //const token = req.header(jwtKeyHeader);
  try {
    // jwt.verify(token, secretKey, jwtOptions, (error, decoded) => {
    //   if (error) {
    //     const message = 'Session expired';
    //     res.status(401).json({ response: { message } });
    //   } else {
    //     req.userid = decoded.user.id;
    //     next();
    //   }
    // });
    req.middlewareTest = 'middleware-working';
    next();
  } catch (error) {
    next(error);
  }
};
