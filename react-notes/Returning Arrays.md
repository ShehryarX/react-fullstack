# Returning Arrays

This is the old way to return an array of elements (we have to manually loop over the array, then return it, which is redundant in this case):

```
const Posts = () => {
    const ids = [
        { id: '1', name: 'Post 1' },
        { id: '2', name: 'Post 2' },
        { id: '3', name: 'Post 3' }
    ];

    const list = ids.map(item => (
        <span key={item.id}>
            <Link to={item.id}>{item.name}</Link><br/>
        </span>
    ));

    return (
        <div>   
            {list}
        </div>  
    );
}

export default Posts; 
```

React 16 allows us to return it directly:

```
const Posts = () => {
    const ids = [
        { id: '1', name: 'Post 1' },
        { id: '2', name: 'Post 2' },
        { id: '3', name: 'Post 3' }
    ];

    return ids.map(item => (
        <span key={item.id}>
            <Link to={item.id}>{item.name}</Link><br/>
        </span>
    ));
}

export default Posts; 
```

We can also return arrays directly, provided we assign the `key` attribute.

```
const Posts = () => {
    return [
        <div key='1'>Hello</div>,
        <h1 key='2'>I am</h1>,
        <h3 key='3'>a React app</h3>
    ]
}

export default Posts; 
```