import React, { useEffect, useState } from 'react';

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
    setLoading(true);
    setRequestParams(requestParams);
  }

  useEffect(() => {
    async function apiCall() {
      let response = await axios({
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.data
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
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  ); 
};

export default App;
