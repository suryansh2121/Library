import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const createToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role || 'USER',   //Default
  };
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};
