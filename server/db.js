import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env from local file named "dotenv" (fallback to default .env)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const customEnvPath = path.join(__dirname, 'dotenv');
dotenv.config({ path: customEnvPath });
dotenv.config();

// Prefer env var; fall back to local Mongo running on default port with DB myDBTest
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myDBTest';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log(`✅ Connected to MongoDB at ${mongoURI}`);
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err.message);
  }
};

export default connectToMongo;
