// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://bafca1b5543a357b008ca7e565e7c009@o196886.ingest.us.sentry.io/4508483952705536",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
