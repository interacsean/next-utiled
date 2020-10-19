let envVars;
try {
  envVars = require('./.env.json');
} catch {
  envVars = {};
}

module.exports = {
  // For netlify deployment
  target: "serverless",
  env: {
    ...envVars,
  },
};
