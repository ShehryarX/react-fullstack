# Using Props

- To import JSON from a file, you just do `import name from './file.json'`, and JS will convert the file to a JSON object in memory
- Note we can simplify `<tag></tag>` as `<tag />`
- We can pass data between components by using props
- To pass on data, you specify a tag in the element like `<tagName attributeName={variable} />`
  - This allows the tagName class to access the variable within the function or class it's in
  - This is passed on as `props`
  - Within the component or class, we can access `props.attributeName`
- Note that when using `.map((item) => { return item; });`, you have to assign a `key` to every element you return (if you are returning an element) 
  - This is done by specifying `key={item.id}`, where items is the object that looped through and id is a unique identifier for it, such as an integer