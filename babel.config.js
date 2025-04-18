module.exports = {
  presets: [
    ["@babel/preset-env", { loose: true }], // Set loose: true here
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-private-property-in-object", { loose: true }],
    ["@babel/plugin-transform-private-methods", { loose: true }],
  ],
};
