const { getAuth } = require( 'firebase-admin');
const db = require('../config/connection');

module.exports = {
  // function for our authenticated routes
  authMiddleware: async function ({ req }) {
    console.log("context middleware running");
    console.log( req.headers );
    // allows token to be sent via  req.query or headers
    let refreshToken = req.query.refreshToken || req.headers.authorization;
    console.log(refreshToken);

    // verify token and get user data out of it
    try {
      const user = await db.collection('users').findOne({ token: refreshToken });
      console.log(user);
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};