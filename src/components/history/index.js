import './history.scss'

const HistoryElement = (props) => {
    // data =;
    return (
        <>
        <h3>URL: {props.data.url}</h3>
        <p>METHOD: {props.data.method}</p>
        <p>REQUEST DATA: {props.data}</p>
        <p>RETRIEVED DATA:</p>
        </>
    )
}

const History = (props) => {

    let apiHistoryElements = props.apiHistory.map(item => {
        return <HistoryElement data={item}/>
    });

    return (
        <>
        </>
    )
}

export default History;