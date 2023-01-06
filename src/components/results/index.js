import { prettyPrintJson } from "pretty-print-json";
import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';


const Results = (props) => {
  return (
    <section>
     {props.loading ? 
     <div>loading...<Spinner animation="border" /></div> :
     props.data ?
     <Accordion>
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Results</Accordion.Header>
        <Accordion.Body>
          <pre data-testid="results" dangerouslySetInnerHTML={{ __html: prettyPrintJson.toHtml(props.data) }} /> 
        </Accordion.Body>
      </Accordion.Item>
     </Accordion> : 
     null}
    </section>
  ) 
}

export default Results;