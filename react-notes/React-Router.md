# React Router

- Creates routes to enable us to use different views
- `npm install --save react-router-dom`
- For multi-page applications, this is how the process works:
  1. URL or route is changed
  2. Server pulls new information
  3. Browser refreshes to display that information
- On single-page applications, it's a little different: 
  1. History is created so that when you change your route, the history is updated
  2. React router listens for changes to the history, and when it finds a change, it finds the modules related to the URL
  3. React router tells React what components to display on the screen

