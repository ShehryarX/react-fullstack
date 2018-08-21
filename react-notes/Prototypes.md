# Proptypes
Proptypes allow you to verify/check the information recieved from the `props` object.

`npm install --save prop-types`

`import PropTypes from 'prop-types';`

```
UserTemplate.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    canSpeakFrench: PropTypes.bool,
    randomFunction: PropTypes.func,
    randomObject: PropTypes.object,
}
```

Say we pass a string that represents a colour, like primary or secondary. We can use `PropTypes.oneOf([possibleOptionsList])`. Similarly, we can use `PropTypes.oneOfType([PropTypes.string, ...])`.

We can also check if an array is filled with strings by doing `PropTypes.arrayOf(PropTypes.string)`.

We can specify that something is required by doing `PropTypes.string.isRequired`.

We can write our custom `PropTypes` checker:

```
UserTemplate.propTypes = {
  variableName: function(props, propName, componentName) {
    if (condition) {
      
    } else { 
      return new Error('')
    }
  }
}
```