import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { createToken } from '@/lib/auth';
import { loginLimiter } from '@/lib/rateLimit';

export default async function handler(req, res) {
  // Apply rate limiter
  try {
    await loginLimiter.consume(req.ip); 
  } catch (error) {
    return res.status(429).json({ error: 'Too many login attempts, please try again after 15 minutes' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  
  if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const normalizedEmail = email.toLowerCase();

    // Try to find Admin first
    let user = await prisma.admin.findUnique({ where: { email: normalizedEmail } });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = createToken(user);
      return res.status(200).json({ token, role: user.role });
    }

    // Try to find User
    user = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = createToken(user);
      return res.status(200).json({ token, role: 'USER' });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}