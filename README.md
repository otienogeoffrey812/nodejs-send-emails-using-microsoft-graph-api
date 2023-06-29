# nodejs-send-emails-using-microsoft-graph-api

# Register the application

a. Sign in to the Azure portal. https://portal.azure.com
b. If you have access to multiple tenants, use the Directories + subscriptions
   filter in the top menu to switch to the tenant in   which you want to register the application.
c. Search for and select Azure Active Directory.
d. Under Manage, select App registrations > New registration.
   Enter a Name for your application then Select Register.
e. Under Manage, select Certificates & secrets.
f. Under Client secrets, select New client secret, enter a name, and
   then select Add. Record the secret value in a safe location for use in a later step.
   Under Manage, select API Permissions > Add a permission. Select Microsoft Graph.
   Select Application permissions.
g. Under User node, select User.Read.All and Mail.Send, then select Add permissions.

# Technology and stack
Node 
Express 
@azure/msal-node
axios
joi
dotenv

# Commands 
* To install dependancies run `npm install`
* To run the application locally run `npm run start`