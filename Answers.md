1. What problem does the context API help solve?
The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions:  It carries a payload of information from your application to store.
Reducers: A Reducer is a function that determines changes to an applications state. 
Store: Redux is a state container for JS apps, often called the redux store. It stores the whole state of the app in an immutable object tree. 
Store is also known as the single source of truth because it holds application state, allows state to be updated via dispatch(action) and when you want to split your data handling logic, you use a reducer composition instead of adding more stores.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the "global" state that all components in the componenet tree can access.
This is the state of your application is in and basically what is being redered. 
Component local state is state that is local to a single componenet and cannot be seen outside of the component. It is set either by passing init state to build or by 
implementing init state and returning a map from the state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators

It inserts it self inbetween the action creator and the reducers, depending on what the creator returns.
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
 That function receives the storesdispatch method, which is then used to  dispatch regular synchronous actions
 inside the body of the functiononce the asynchronous operations have been completed


1. What is your favorite state management system you've learned and this sprint? Please explain why!
I really want to learn more about redux store={store} state management but as of now I am more familiar with react state management
