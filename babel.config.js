module.exports = function (api) {
  if (typeof api.cache === "function") {
    api.cache(true);
  }

  return {
    presets: [require.resolve("babel-preset-expo"), require.resolve("nativewind/babel")],
    plugins: [],
  };
};
