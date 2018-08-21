# Adding Some Style

1. We can create a styles object and apply it in-line to elements.
```
const styles = {
  styleName: {
    // some style properties
  }
}
```

```
<div style={styles.styleName}>
...
</div>
```

2. Create `public/styles.css` and add proprties there. Then, you can go to index.html and insert `<href rel="stylesheet" href="styles.css">`. This is used in conjunction with the `className` property in the HTML document. 

3. Webpack doesn't allow us to import files in `public/`, so we need to place the CSS files in `src/`. You can place them in `src/css/`. Note that this method injects the CSS into the styles in the HTML document. 