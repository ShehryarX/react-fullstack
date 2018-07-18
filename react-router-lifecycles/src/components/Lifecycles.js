import React, { Component } from 'react';

export default class Lifecycles extends Component {
    // stage 1: get default props
    
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
        console.log('Rendering');

        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={() => this.setState({ title: 'something elsee' })}>
                    Click to Change Title
                </div>
            </div>
        ); 
    }

    // stage 5: after render
    componentDidMount() {
        console.log('After render');
    }

    // more lifecycle methods
    componentWillUpdate() {
        console.log('Before update');
    }
    
    componentDidUpdate() {
        console.log('After update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.title !== 'something else';
    }

    componentWillReceiveProps() {
        console.log('Before receiving props');
    }

    componentWillUnmount() {
        console.log('Unmounting');
    }
}