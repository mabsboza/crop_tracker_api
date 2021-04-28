import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start server
app.listen(process.env.PORT).on('listening', () => {
    console.log(`🚀 are live on ${process.env.PORT}`);
  });
export default app;