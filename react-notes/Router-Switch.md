# Router's Switch

If we don't want to use the attribute `exact` on our `<Route>` elements, there's another solution. 

We can mimic the switch statement in Javascript by using `<Switch>` (imported from `react-router-dom`. For example:

```
<Switch>
    <Route path='/posts/:id/' component={PostItem} />
    <Route path='/posts' component={Posts} />
    <Route path='/profile' component={Profile} />
    <Route path='/' component={Home} />
</Switch>
```

Note that the most specific routes should be at the top because the switch statement will exit as soon as it asserts a value that it finds. Thus the most general values should be placed at the end.