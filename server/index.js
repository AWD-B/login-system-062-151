import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectToMongo from './db.js';
import authRoutes from './routes/authRoutes.js';  // ✅ must come before use()

// Load env from local file named "dotenv" (fallback to default .env)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const customEnvPath = path.join(__dirname, 'dotenv');
dotenv.config({ path: customEnvPath });
dotenv.config();
connectToMongo();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ✅ use authRoutes after importing it
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
