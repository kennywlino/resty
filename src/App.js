import React, { useEffect, useReducer, useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

import axios from 'axios';
import History from './components/history';


// array of {method, url, results}
export const initialState = {
  apiHistory: [],
};

export const apiHistoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return {...state, apiHistory: [...state.apiHistory, action.payload]};
    case 'REMOVE':
      return {...state, apiHistory: state.apiHistory.filter(item => item !== action.payload)};
    default: 
      return state;
  }
}

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(apiHistoryReducer, initialState);

  const addToApiHistory = () => {
    let action = {
      type: 'ADD',
      // an object with {(method, url, data) + (data retrieved)}
      payload: {...requestParams, ...data} 
    }
    dispatch(action)
  }

  const removeFromApiHistory = () => {
    let action = {
      type: 'REMOVE',
      payload: {} // url? or use array index as id for better specificity 
    }
    dispatch(action)
  }

  // used to save the requestParams
  const callApi = async (requestParams) => {
    setLoading(true);
    setRequestParams(requestParams);
  }

  // makes the API call once the requestParams var is changed
  useEffect(() => {
    async function apiCall() {
      let response = await axios({
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.reqData
      })
      setData(response.data);
      setLoading(false);
    }
    if(Object.keys(requestParams).length > 0) {
      apiCall();
    }
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History apiHistory={state.apiHistory}/>
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  ); 
};

export default App;
