import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'
import { useEffect } from 'react';

function App(props) {
  const dispatch = useDispatch() // Get the dispatch function from the Redux store
  const data = useSelector((state) => state.data) // Select the "data" slice of the Redux store using a selector function

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  useEffect(() => {
    dispatch(fetchData()) // Dispatch the "fetchData" thunk action when the component mounts or when "props.objectId" changes
  }, [props.objectId, dispatch])


  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button> {/*Dispatch the "fetchData" thunk action when the button is clicked*/}
        <button onClick={() => dispatch(clearData())}>Clear</button> {/*Dispatch the "clearData" action when the button is clicked*/}  
        <button onClick={() => dispatch(incrementId())}>Next</button> {/*Dispatch the "incrementId" action when the button is clicked*/} 
        <button onClick={() => dispatch(decrementId())}>Back</button>  {/*Dispatch the "decrementId" action when the button is clicked*/} 
      </div>
      <input value={ data.objectId } onChange={(e) => {
        dispatch(inputId(Number(e.target.value))) // Dispatch the "inputId" action with the new value when the input field value changes
      }} />
      <div>
        {data.objectId}
       {renderImg()} {/*Call the "renderImg" function to display an image or placeholder text*/}
      </div>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId }) // Define a selector function that maps the "objectId" property from the "data" slice of the Redux store to a prop in the component

export default connect(mapStateToProps)(App);