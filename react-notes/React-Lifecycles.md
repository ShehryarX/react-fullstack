# React Lifecycles

1. Set up the default props inside the component
2. Set default state
3. Before rendering: `componentWillMount()`
4. Render JSX
5. After rendering: `componentDidMount()`

```
import React, { Component } from 'react';

export default class Lifecycles extends Component {
    // stage 1: set default props (props you get)
    
    // stage 2: set state
    state = {
        title: 'Lifecycles'
    }

    // stage 3: before render
    componentWillMount() {
        console.log('Before render');
    }

    // stage 4: render
    render() {
        return (
            <div>
                {this.state.title}
            </div>
        );
    }

    // stage 5: after render
    componentDidMount() {
        console.log('After render');
    }
}
```
