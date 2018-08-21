# Rendering the App

- We use components and views when writing React apps
- Components are pieces of code that work together
- The HTML we use is not actually HTML, it's JSX, a Javascript-compiled version of HTML

Here are the steps to starting your React app, making the changes in `index.js`:
1. Import `React` and `ReactDOM`
2. Create a function `App()`
3. `ReactDOM.render(componentName, where to put it)`, in most cases, this is `ReactDOM.render(<App />, document.querySelector('#root'))`
4. 