const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const User = mongoose.model("users");

const key = require("./Key").ourSecret;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      if (jwt_payload) jwt_payload._id = jwt_payload.id; //tempfix, can't remember how I got around using _id and id
      User.findById(jwt_payload)
        .then(user => (!user ? done(null, false) : done(null, user)))
        .catch(err => console.log(err));
    })
  );
};
