const { getAuth } = require( 'firebase-admin');

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let refreshToken = req.query.refreshToken || req.headers.refreshToken;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      // Should this be this way?
      token = token.split(' ').pop().trim();
      console.log(token);
    }

    if (!refreshToken) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      getAuth()
      .verifyIdToken( token )
      .then((decodedToken) => {
        console.log(decodedToken);
      })
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};