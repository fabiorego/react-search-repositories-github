const path = require("path");
const { version } = require("./package");

module.exports = {
  components: "src/components/**/*.jsx",
  defaultExample: true,
  moduleAliases: {
    "rsg-example": path.resolve(__dirname, "src")
  },
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        }
      ]
    }
  },
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
  }
};
