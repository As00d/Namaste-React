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
   
Issues faced - 
1. npm run build with parcel throws an error
Solution: https://stackoverflow.com/questions/71053013/npm-run-build-with-parcel-throws-an-error
