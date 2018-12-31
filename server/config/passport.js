import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.model';

const authConfig = passport => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'secret',
  };

  passport.use(
    new JWTStrategy(options, (jwtPayload, cb) =>
      User.findById(jwtPayload.data._id)
        .then(user => cb(null, user))
        .catch(err => cb(err)),
    ),
  );
};

export default authConfig;
