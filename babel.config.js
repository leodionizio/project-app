module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "root": ["./app"],
        "alias": {
          "@navigators": "./navigators",
          "@pages": "./src/pages",
          "@components": "./src/components",
          "@utils": "./src/utils",
          "@assets": "./src/assets",
          "@constants": "./src/constants",
          "@mock": "./src/mock",
          // "@helpers": "./app/helpers",
          // "@reducers": "./app/reducers",
        }
      }]
    ]
  };
};
