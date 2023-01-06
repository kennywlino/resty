import { prettyPrintJson } from "pretty-print-json";
import React from "react";

const Results = (props) => {
  return (
    <section>
     {props.loading ? <pre>loading...</pre> : 
     props.data ? <pre data-testid="results" dangerouslySetInnerHTML={{ __html: prettyPrintJson.toHtml(props.data) }} /> : null}
    </section>
  ) 
}

export default Results;