import React, { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
    let response 
    try {
      setLoading(true);
      response = await axios({
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.data
      })
      setLoading(false);
      setData(response.data);
    } catch(e) {
      console.error(e);
      setLoading(false);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {loading ? "loading..." : <Results data-testid="results" data={data} /> }
      <Footer />
    </React.Fragment>
  ); 
};

export default App;
