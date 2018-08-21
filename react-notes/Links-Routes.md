# Creating Routes

`import { BrowserRouter, Route } from 'react-router-dom';`

- `BrowserRouter` is the history listening for changes in the URL (interacts with the history)
- `Route` handles the component changes 
- You need to wrap the index.js return as `BrowserRouter` first

This is how we create an app that routes a few different pages:

```
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/posts' component={Posts} />
                <Route path='/profile' component={Profile} />
            </div>
        </BrowserRouter>
    );
}
```

We use the attribute `exact` to ensure that if we go to `/helloorsomethinglikethis`, `Home` won't show. This fix enables us to not get `Home` and `Posts` or `Home` and `Profile` both displaying line by line. 

We can also create a component that renders every time for all pages by adding it before the opening `<div>` tag.