class Services{
    static generateGraphApiAccessToken = async ()=>{
        try {
            const msalConfig = {
                auth: {
                    clientId: `${process.env.APPLICATION_ID}`,
                    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
                    clientSecret: `${process.env.APPLICATION_SECRET}`,
               }
            };
            const cca = new msal.ConfidentialClientApplication(msalConfig);
            
            const tokenRequest = {
                scopes: [ 'https://graph.microsoft.com/.default' ],
            };
            
            const tokenResponse = await cca.acquireTokenByClientCredential(tokenRequest);
        
            return tokenResponse.accessToken;
            
        } catch (error) {
            return "";
        }
    }

}
export default Services;