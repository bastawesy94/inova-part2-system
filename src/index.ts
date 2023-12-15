// app.ts
import express, { Express, Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import storyRoutes from './routes/storyRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware

// After the Express app initialization
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add CRUD routes here
app.use('/api', userRoutes);
app.use('/api', storyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
