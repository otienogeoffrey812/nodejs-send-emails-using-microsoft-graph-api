import Services from "../utils/Services";

class Mails{
    static sendMail = async(req, res)=>{
        try {
            const { recepient } =  req.body;

            const accessToken = await Services.generateGraphApiAccessToken();
            
        } catch (error) {
            
        }
    }
}

export default Mails;