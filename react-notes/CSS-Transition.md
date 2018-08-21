# CSS Transitions

```
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/App.css';

class Fade extends Component {
    state = {
        show: true,
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        return(
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={5000}
                    classNames="square"
                >
                    <div className={`square ${this.state.show}`}>
                        Hello
                    </div>
                </CSSTransition>
                <div className="showDiv"
                    onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>
        )
    }
}


export default Fade;
```

Note that here we use `CSSTransition` to dynamically change the CSS of the div.

In CSS:

```
.square.false {
  background: #feaaa3;
  transform: translateX(-100%);
}

.square.true {
  transform: translateX(0%);
}

.square-enter.square-enter-active {
  background: blue;
}

.square-exit.square-exit-active {
  background: green;
}
```