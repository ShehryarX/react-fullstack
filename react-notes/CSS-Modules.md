# Using CSS Modules

Rather than doing `import './styles.css'`, we do `import classes from './styles.css'`. Now we can apply styles to elements by doing `style={classes.styleNameInCSS}`.

To enable CSS modules, run `npm run eject` to show all the configuration files being used, namely in `/config/webpack.config.dev.js`

Append the following: 

```
test: /\.css$/,
use: [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[locala]__[hash:base64:5]',
    },
  },
  ...          
```