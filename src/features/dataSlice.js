// Import the createSlice function from the Redux Toolkit library
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state of the Redux store
const initialState = {
    objectId: 10245, // default object ID
    apiData: {} // empty object to hold API data
}

// Define a data slice with a name, initial state, and a set of reducer functions
export const dataSlice = createSlice({
    name: 'data', // name of the slice
    initialState, // initial state of the slice
    reducers: {
        // Reducer function to set the API data in state
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        // Reducer function to clear the data and reset to initial state
        clearData: () => {
            return initialState
        },
        // Reducer function to update the object ID in state based on user input
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        // Reducer function to increment the object ID in state by 1
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        // Reducer function to decrement the object ID in state by 1
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        }
    }
})

// Export the reducer functions as actions
export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions

// Define a fetch data thunk that makes an API call to retrieve data based on the current object ID in state
export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState() // Get the current state of the Redux store
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`) // Make an API call to retrieve data for the current object ID
        const rData = await response.json() // Parse the response data as JSON
        dispatch(setData(rData)) // Dispatch the setData action to update the API data in state
    }
    return fetchDataThunk // Return the fetch data thunk function
}

// Export the data slice reducer as the default export
export default dataSlice.reducer