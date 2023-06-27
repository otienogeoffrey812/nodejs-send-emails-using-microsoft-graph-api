import express from 'express';
const app = express()
import routes from './routes/routes.js';

app.use(express.json())

// prefix route api/v1
const routeBase = '/api/v1';

// routes
app.use(routeBase, routes);

export default app;