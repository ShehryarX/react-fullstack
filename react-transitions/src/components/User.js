import React, { Component } from 'react';
import UserTemplate from './UserTemplate';

export default class User extends Component {
    state = {
        name: 'Francis',
        lastName: 'Jones',
        age: 25,
        hobbies: ['run', 'jump'],
        canSpeakFrench: false,
        randomFunction: () => console.log('hey'),
        randomObject: {brand: 'ford', model: 'focus'},
        mother: function(props, propName, componentName) {
            console.log(props);
        },
        color: 'red',
    }

    changeColour() {
        // this.setState({
        //     color: 'blue';
        // })
        this.refs.myColour.style.colour = 'blue';
    }

    render() {
        const style = {
            colour: this.state.color,
        }
        return (
            <div>
                <h4 style={style} ref='colour'>{this.state.mother}</h4>
                <div onClick={() => this.changeColour()}>Change colour</div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}