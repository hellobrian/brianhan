# Brian Han

> 🚧 Still under construction 🚧

## Basically...

This is the starting boilerplate code for a react project that utilizes react-router, redux, react-redux all built on top of create-react-app. 

Not much here yet, but the main thing to note here is code-splitting.
- All container components are used in react-router as "page" components.  
- New bundles are created for each route so that visitors only load the JavaScript they need for the route they're on.
- Vendor bundle is also created so that repeat vistors can cache vendor scripts once and avoid redownloading these bundles later.
