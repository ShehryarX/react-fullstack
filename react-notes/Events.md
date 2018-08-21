# Events

- Instead of `onclick` (ES5), we use `onClick`, which is ES6
- Generally you use the keyword `Handler` when naming functions that listen to some event
- The keyword `this` refers to the class in question
- For text fields, you use the `onChange` property
- Note that when using `this.methodName`, it refers to the function and does not trigger it as soon as possible
  - If you do `this.methodName()`, it will trigger the function once the page loads
- You can do the `(event) => this.eventHandler(event)`, which is a nested function, 
- These are called `SyntheticEvents` which are on the React docs