# React Lifecycles Continued

If you run `this.setState({})` in a React app, React will run the `render()` method. `componentWillMount()` and `componentDidMount()` only run for the first call of `render()`. For subsequent changes, we will need to use `componentWillUpdate()` and `componentDidUpdate()`. 

`shouldComponentUpdate(nextProps, nextState)` is a function that runs right before the component is about to update. `nextState` is the state that was just based from `this.setState({})`. This function returns true or false. By default it returns true, which means that it will proceed with the update. If it returns false, it will not update the state!  This way allows us to control our application much more.

`componentWillReceiveProps()` will be listening for new props being passed on to the component. It checks when the parent component sends props to the component in question. This occurs when the component has rendered at least once. 

`componentWillUnmount()` runs when a component is about to be unmounted. This code is executed when the user leaves the component in question.