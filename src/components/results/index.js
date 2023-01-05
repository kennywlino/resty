const Results = (props) => {
  return (
    <section>
     {props.loading ? <pre>loading...</pre> : <pre data-testid="results">{props.data ? JSON.stringify(props.data, undefined, 2) : null}
     </pre> }
    </section>
  ) 
}

export default Results;