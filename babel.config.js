module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
    // Nada de 'expo-router/babel' aqui
  };
};
