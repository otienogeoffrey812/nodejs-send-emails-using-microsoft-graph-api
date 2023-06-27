import Services from "../utils/Services.js";
import { handleError } from "../utils/Funnctions.js";
import axios from "axios";

import dotenv from 'dotenv';
dotenv.config()

const EMAIL_URL = `https://graph.microsoft.com/v1.0/users/${process.env.MAIL_SENDER}/sendMail`;

class Mails{
    static sendMail = async (req, res)=>{
        try {
            const { recipient, subject, emailBody } =  req.body;

            const accessToken = await Services.generateGraphApiAccessToken();
  
            const emailConfig = {
              Message: {
                Subject: subject,
                Body: {
                  ContentType: 'HTML',
                  Content: emailBody
                },
                ToRecipients: [
                  {
                    EmailAddress: {
                      Address: recipient
                    }
                  }
                ],
                  from: {
                      emailAddress: {
                      address: process.env.MAIL_SENDER,
                      },
                  },                  
              },
              SaveToSentItems: 'false'
            };
  
            await axios.post(EMAIL_URL, emailConfig, {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                  'Content-Type': 'application/json'
                }
              })

            res.status(200).send({
                status: 'success',
                message: 'Email sent successfully',
              });
            
        } catch (error) {
            handleError(error, 500, res);
        }
    }
}

export default Mails;