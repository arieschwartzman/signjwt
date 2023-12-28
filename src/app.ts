import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Check if API_KEY is set
if (!API_KEY) {
  console.error('API_KEY is not set');
  process.exit(1);
}

console.log(`API_KEY: ${API_KEY}`);


// Middleware for JSON payload parsing
app.use(express.json());

interface IPayload {
  secret: string | undefined;
  audience: string;
}

// Middleware to check API key
app.use((req: Request, res: Response, next: Function) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }
  
  next();
});

// Endpoint to create a JWT
app.post('/sign', (req: Request, res: Response) => {
  const payload: IPayload = req.body;
  const secret = payload.secret;  
  payload.secret = undefined;
  // Sign the JWT
  if (secret) {
    // Log the signing payload take 5 characters of the secret
    console.log(`Signing payload: ${secret.slice(0, 5)}...`);
    const token = jwt.sign(payload, secret, { expiresIn: '1h', audience: payload.audience });
    return res.json({ token });
  }
  return res.status(400).json({ message: 'Secret is required' });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
