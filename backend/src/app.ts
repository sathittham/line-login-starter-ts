// Import config to validate environment variables on startup
import logger from './utils/logger';
import config from './config';
import express from 'express';
import session from 'express-session';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        httpOnly: true,
    }
}));

// A simple health check endpoint to confirm the server is running.
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);

app.listen(config.port, () => {
    logger.info(`Server is running on http://localhost:${config.port}`);
});