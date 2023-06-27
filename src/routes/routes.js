import express from 'express';
// import Mail from '../controllers/Mail';

const routes = express.Router();

routes.post(
  '/mail',
  // Mail.sendMail,
);

export default routes;
