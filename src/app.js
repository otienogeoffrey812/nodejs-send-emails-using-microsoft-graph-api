import express from 'express';
const app = express()

app.use(express.json())

// prefix route api/v1
const v1Route = '/api/v1';

// routes
// app.use(v1Route, routes);

export default app;