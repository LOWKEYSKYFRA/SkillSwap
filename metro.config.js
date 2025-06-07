const { getDefaultConfig } = require("@expo/metro-config");
const config = getDefaultConfig(__dirname);

// Let Metro know about .cjs files:
config.resolver.sourceExts.push("cjs");

// Disable strict package‐exports so Firebase’s internal modules load correctly:
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
