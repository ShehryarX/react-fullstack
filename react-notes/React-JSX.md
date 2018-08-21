# React JSX

This is what goes on behind the scenes when you create a React component: 

`React.createElement('h1', { className: 'title' }, 'Hello, world!')`

Here are some dangers to look out for:
- You can only return one element type in a function

```
return (
  <div>
    ...
  </div>
);
```

- `class` in HTML is `className` in JSX

```
<div className="something">
  ...
</div>
```

Upon compilation, this will translate to:

```
<div class="something">
  ...
</div>
```