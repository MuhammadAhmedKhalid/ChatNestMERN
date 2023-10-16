import express from 'express';
// import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db.ts';
// import dotenv from 'dotenv';
import UserRoutes from './src/routes/UserRoutes.ts';

// dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000; 

app.use(bodyParser.json());
// app.use(cors());

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server only after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/users', UserRoutes);

// Default route
app.get('/', (req: any, res: any) => {
  res.send('Welcome to the chat app!');
});
