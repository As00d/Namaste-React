# Namaste React Episode 1 - Inception



# Parcel
- Local build production ready
- Local server
- HMR - hot module replacement
- File watching algorithm - written c++
- Faster build by caching
- Image optimisation
- minification 
- bundling
- compress the file
- consistent hashing
- code splitting
- differential bundling - to support older browsers
- diagnostic / error handling 
- host in https
- tree shaking - remove unused code 
- different dev and production build

Two types of import/export
 - default export 
    - export default ComponentName/Variable
    - import ComponentName/Variable from location
 - named export
    - export const ComponentName/Variable
    - import {ComponentName/Variable} from location

# React hooks
- Normal js functions written by Facebook developers (utility function)
   - useState()
   - useEffect()
   

# 2 types of routing in web app
   - Server side routing - u make a network call, and index.html is rendered from there.
   - Client side routing -  here all things are rendered we do not make a call to anything

# Performance optimisation tools and techniques
   - Bundle spliting
      - also known as
         - chunking
         - code splitting
         - dynamic bundling
         - lazy loading
         - on demand loading

# Styling options for projects -
   - normal css
   - styled components
   - material ui
   - chakra ui
   - scss, sass 
   - ant design

# Redux and Redux toolkit 
   - Some jargons that we need to know 
      - store
      - slice
      - dispatching an action
      - function reducer which will update the slice
      - selector to read the value from the store

- when a button is called its basically dispatches an action which calls the reducer function which updates the value to the store. In order to read the value back we need something called as selector. and we call its subscribes to store using selector.

# Steps to start with redux
   - Install @reduxjs/toolkit and react-redux
   - Build our store
   - connect store to our app
   - create a cart slice
   - dispatch an action 
   - read data using selector



Issues faced - 
1. npm run build with parcel throws an error
Solution: https://stackoverflow.com/questions/71053013/npm-run-build-with-parcel-throws-an-error
