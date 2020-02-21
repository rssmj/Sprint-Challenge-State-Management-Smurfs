1. What problem does the context API help solve?

<!-- Context API is a component structure that provides a way to pass forms of data across all levels of the application. It can isolate the data in a specific place and allow the components to access it when needed, without having to pass props down manually at every level. -->

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

<!-- Actions are the source of information going to the store. It tells the reducer what is happening in the application and how to change the state with an action like click events. -->

<!-- Reducers update the store with the data triggered by an action. Based on the action that took place, it manages how the state data is transferred and kept in the store. -->

<!-- Store is a globalized state that holds the applications state data. Components get their data from the store and render when the data changes. The store is known as 'a single source of truth' because helps to create universal apps by storing the state of the application in one object tree. -->

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

<!-- Application state is the globalized state that provides all components in the component tree with access to only the data that they need to access. -->

<!-- Component state is a localized state and is isolated to a single component. It cannot be accessed outside of the local component. -->

<!-- Depending on how many components are in your application that will need to access the state or will share state between different components, Application state might be good to use. If the state is more isolated to a smaller part of the application or isolated to specific components, Component state may be a better option. -->

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

<!-- `redux-thunk` is middleware that provides the store with more capabilities. It can use asynchronous logic that can interact with the store. The `action-creators` are changed by returning a function instead of an action and can dispatch data only when certain conditions are met. -->

1. What is your favorite state management system you've learned and this sprint? Please explain why!

<!-- Redux state management because it can help manage more complex applications. It uses a predictable pattern of how data is handled that can make it easier to keep track of what's going on in the application. -->
