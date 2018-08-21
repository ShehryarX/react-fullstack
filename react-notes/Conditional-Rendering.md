# Conditional Rendering

- Allows us to render components based on some condition by using the ternary operator and following the steps below:
  1. Place `{}` around the area
  2. Create a condition and two results

For example:

```
const value = true; // can be a function too

return (
    <div>
        { value ? 
            <div>
            Hello, it's true!
            </div>
            :
            null    
        }
    </div>
)
```

We can do the same type of logic through a function:

```
const returnValue = () => {
  return (
    value ? 
      <div>Hello, it's true!</div>
    :
      null
  );
}
```

Note that we did not use curly braces here, but brackets. 