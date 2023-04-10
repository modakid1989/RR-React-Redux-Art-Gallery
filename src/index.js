import React from 'react'; // Import the React library
import ReactDOM from 'react-dom'; // Import the ReactDOM library
import App from './App'; // Import the App component from the App.js file
import { store } from './store' // Import the Redux store from the store.js file
import { Provider } from 'react-redux' // Import the Provider component from the react-redux library

// Enable strict mode for the app
// Wrap the App component with a Provider component, passing in the Redux store as a prop
// Render the App component
ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}> 
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') // Find the HTML element with an id of "root" and render the app inside it
);