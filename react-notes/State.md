# State

- Sort of like a database
- Allows us to store information like data or events
- For functional components, they are stateless
- For class-based components, they are instantiated with a default state, `this.state = {};`
- The main idea of state is that React will listen to the application for changes in the variable `state`
  - If there is a change, React will re-render that component accordingly
- `this.setState({})` takes in an object an makes changes to `this.state` and does all the React-side stuff
  - React will call `render()` every time a class's state changes

We may have to use the keyword `bind` at times.

```
inputChangeHandler(event) {
  this.setState({
    keywords: event.target.value,
  })
}

render() {
  return (
    <input type="text" onChange={this.inputChangeHandler} />
  );  
}
```

In this case, the function `inputChangeHandler(event)` is called, however, when `this.setState({})` is executed, `this` refers to the scope of the function and not the class itself! Therefore we much bind the function to `this` class. This is done by doing `this.inputChangeHandler.bind(this)`, which tells the function `inputChangeHandler(event)` to consider `this` in the scope of the class and not the function. 

We can avoid the usage of `.bind(this)` by using fat arrow functions, which are really smart. Fat arrow functions know the context of this and apply it accordingly. Therefore we could use a function as such:

```
inputChangeHandler = (event) => {
  this.setState({
    keywords: event.target.value,
  })
}
```

As a rule of thumb, use functional components over class-based components because they use less memory.