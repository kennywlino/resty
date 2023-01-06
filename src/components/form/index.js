import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState(null);
  const [reqData, setReqData] = useState({});
  const [validJson, setValidJson] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      reqData
    };
    props.handleApiCall(formData);
  }

  const handleRestSelection = e => {
    const selectedRestMethod = e.target.textContent;
    setMethod(selectedRestMethod);
  }

  const handleUrl = e => {
    setUrl(e.target.value);
  }

  const handleData = e => {
    try {
      let data = JSON.parse(e.target.value);
      console.log(validJson);
      setReqData(data)
      setValidJson(true);
    } catch(e) {
      console.log(validJson);
      setValidJson(false);
    }
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <label className="input">
            <span>URL: </span>
            <input data-testid="url-input" name='url' type='text' onChange={handleUrl}/>
            <button data-testid="submit-button" type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={handleRestSelection}>GET</span>
            <span id="post" onClick={handleRestSelection}>POST</span>
            <span id="put" onClick={handleRestSelection}>PUT</span>
            <span id="delete" onClick={handleRestSelection}>DELETE</span>
            <span id="show-history" onClick={props.handleShow}>SHOW HISTORY</span>
          </label>
          {validJson ? null : "Invalid JSON"}
          <label>
            <textarea rows="15" cols="40" placeholder="Insert JSON object here" onChange={handleData}></textarea>
          </label>
        </form>
      </>
  )
}

export default Form;
