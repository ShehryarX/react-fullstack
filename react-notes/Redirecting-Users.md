# Redirecting Users

`import { Redirect } from 'react-router-dom'` and use it like this: `<Redirect from='/profile' to='/' />`.

We can also redirect the user through `props`. This can be done by running `props.history.push('urlPath')`.

We can add a 404 page by adding a general route without a path. This would indeed require us to make the path `/` with the `exact` attribute: 

```
<Switch>
    <Route path='/posts/:id/' component={PostItem} />
    <Route path='/posts' component={Posts} />
    <Route path='/profile' component={Profile} />
    <Route path='/' exact component={Home} />
    <Route render={() => <h3>Ooops. 404.</h3>}/>
</Switch>
```

Instead of `render={...}`, we can also do `component={...}`.

