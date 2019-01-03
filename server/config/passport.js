import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.model';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secret',
};

const authConfig = passport => {
  passport.use(
    'user',
    new JWTStrategy(options, (jwtPayload, cb) =>
      User.findById(jwtPayload.data._id)
        .then(user => cb(null, user))
        .catch(err => cb(err)),
    ),
  );
};

export default authConfig;
