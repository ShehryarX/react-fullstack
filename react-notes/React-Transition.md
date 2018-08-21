# Using React Transitions

`npm install --save react-transition-group`

`import Transition from 'react-transition-group/Transition';`

When using the transition, do the following:

```
<Transition
  in={this.state.show}
  timeout={2000}
>
...
</Transition>
```

In between `Transition`, we need a function that returns something and takes in `state`:

This library does not actually animate for us, it tells CSS what to do and keeps track of what state the element is in at the moment.

The possible states are: `exiting`, `exited`, `entering`, `entered`. With these states, we can create CSS classes that do something with this information, such as edit the opacity. 

Here we are binding CSS along with Transition. The `opacity` is 0 when the state is exiting or has exited. 

```
<Transition
    in={this.state.show}
    timeout={2000}
>
   { state => 
        <div style={{
            background: 'red',
            height: '100px',
            transition: 'all 2s ease',
            opacity: state === 'exited' || state === 'exiting' ? 0 : 1,
        }}>
        {state}
        </div>
    }
</Transition>
```

We have a few properties: `mountOnEnter` which mounts the children props upon entering in the component and `unmountOnExit` gets rid of all the child props when the animation is done. This frees up the DOM and also what you see on the screen.

Another thing we can do is use the `className` attribute to like this: `<div className={'square square-${state}'>`, which essentially uses a different CSS property when they class name is updated.

We can also further specify the timings through the object passed to the `timeout` attribute. For example: `timeout={{ enter: 2000, exit: 50 }}`. Two other attributes we can use are `enter` and `exit`. If we want to get rid of the four states and hold only `exited` and `entered`, we can set `enter: false` and `exit: false`. By default, these two attributes are true. There is also `onEnter` and `onExit`, which are attributes that take a fat arrow function with a parameter of `node`. 

