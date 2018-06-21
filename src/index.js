import React from "react";
import ReactDOM from "react-dom";
import { createClient } from "@commercetools/sdk-client";
import { createAuthMiddlewareForAnonymousSessionFlow } from "@commercetools/sdk-middleware-auth";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";
import { createRequestBuilder } from "@commercetools/api-request-builder";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import clientConfig from "./config";

const client = createClient({
  middlewares: [
    createAuthMiddlewareForAnonymousSessionFlow({
      host: clientConfig.authHost,
      projectKey: clientConfig.projectKey,
      credentials: {
        clientId: clientConfig.clientId,
        clientSecret: clientConfig.clientSecret
      },
      scopes: clientConfig.scopes
    }),
    createHttpMiddleware({
      host: clientConfig.apiHost
    })
  ]
});

const requestBuilder = createRequestBuilder({
  projectKey: clientConfig.projectKey
});

ReactDOM.render(
  <App client={client} requestBuilder={requestBuilder} />,
  document.getElementById("root")
);
registerServiceWorker();
