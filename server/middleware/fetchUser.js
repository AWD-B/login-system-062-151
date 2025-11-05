import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const fetchUser = (req, res, next) => {
  // Get token from header
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ error: 'Access denied' });

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

export default fetchUser;
