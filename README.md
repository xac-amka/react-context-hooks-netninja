## React Context and Hooks
 > Tutorial by netninja [course](https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)

-----

__Context API__ - Clean & Easy way to share state between components

__Hooks__ - Tap into the inner workings of React in functional components

-----

## React Context & Hooks
 - > Using react context and hooks together, it is almost like __Redux__ (state management)
 - No need install third party library

## Context API
 - Share state within a component tree
 - Inside App component surround it by _Context Provider_
 - It is like Single source of truth, alternative to Redux
 - Also it is not a perfect solution for all situation. We use it only for global state.

## React Hooks
 - Special functions
 > Allow us to do additional things inside Functional components. e.g useState
 - Some hooks
   - useState()
   > use state within a functional component
   - useEffect()
   > run code when a component renders (or re-renders)
   - useContext()
   > consume context in a functional component

## Reducers
 - Reducer Function
 > Interacts with the state / data
 - Relative to Redux reducer
 ```js
 dispatch(type: 'ADD_BOOK', book: {})

 reducer(action, state)
 ```
 - Reducer do:
   - check the action type
   - Update the state object
   - Return the state to _Provider value_