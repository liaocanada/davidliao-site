const configDefaults = {};

const config = {};

// Check each environment variable and override if it exists
Object.keys(configDefaults)
  .forEach(configKey => config[configKey] = process.env[configKey] || configDefaults[configKey]);

export default config;
