import express from 'express';
import Mails from '../controllers/Mails.js';

const routes = express.Router();

routes.post(
  '/mail',
  Mails.sendMail,
);

export default routes;
