# Params and URLs

If you had a blog and you stored posts with routes like `/posts/1`, `/posts/2`, `/posts/3`, etc, you need to create routes for each of these posts. There is a dynamic way to do this. You can do it by setting the path to `/posts/:id`. The `:` tells the React router you want to use a dynamic route. 

Then, in `PostDetail`, you can access the variable `id` through the `props` variable. In this case, it's accessible through `props.match.params.id`.

There is also `HashRouter` which makes `/#/` the home page. 

`MemoryRouter` does not show the path on the URL! It stores everything in the memory, which is very cool. 

You can use `NavLink`, which is more flexible that `Link`. You can apply styles to the `NavLink` based on whether it's been clicked through the `activeStyle` tag. Similarly, you can also use `activeClassName`. This is an example: 

`<NavLink to='/posts' activeStyle={{color: 'red'}}>Posts</NavLink>`