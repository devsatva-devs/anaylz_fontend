const prod = {
  BackendApiURL: process.env.BACKEND_API_URL,
};

const dev = {
  BackendApiURL: process.env.BACKEND_API_URL,
};

const uat = {
  BackendApiURL: process.env.BACKEND_API_URL,
};

// Default to dev if not set
const getEnvConfig = () => {
  switch (process.env.REACT_APP_STAGE) {
    case "prod":
      return prod;
    case "uat":
      return uat;
    default:
      return dev;
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  timeout: 60 * 60 * 1000,
  ...getEnvConfig(),
};
export default config;
