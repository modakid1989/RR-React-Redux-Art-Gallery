import { configureStore } from '@reduxjs/toolkit' // Import the configureStore function from Redux Toolkit
import dataReducer from './features/dataSlice' // Import the dataReducer from the dataSlice file
import { logger } from './features/middleware' // Import the logger middleware from the middleware file

export const store = configureStore({ // Create a Redux store using the configureStore function
    reducer: {
        data: dataReducer // Pass in the dataReducer as the reducer for the "data" state slice
    },
    middleware: [logger] // Apply the logger middleware to the store
})