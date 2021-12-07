
const db = require('../config/connection');

module.exports = {
  // function for our authenticated routes
  authMiddleware: async ({ req }) => {
    console.log("context middleware running");
    // console.log( Object.keys(req) );
    // console.log(req.params);
    // allows token to be sent via  req.query or headers
    let refreshToken = req.headers.authorization || "";
    // console.log(req);
    // console.log(refreshToken);
    var user = null;
    if(refreshToken) {
      console.log(refreshToken)
      const collection = db.collection('users');
      // console.log(collection);
      const myuser = await collection.findOne({ token: refreshToken });
      // console.log(myuser);
      console.log(myuser);
      user = myuser
    }
    // console.log(user);
    // console.log(req.user);
    return { user };
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};