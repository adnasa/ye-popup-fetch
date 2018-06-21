const projectKey = "YOUR_PROJECT_KEY";
const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOU_CLIENT_SECRET";

export default {
  clientId,
  clientSecret,
  projectKey,
  scopes: [`manage_project:${projectKey}`],
  authHost: "https://auth.commercetools.com",
  apiHost: "https://api.commercetools.com"
};
