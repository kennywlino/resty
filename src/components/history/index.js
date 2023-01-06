import './history.scss'

const HistoryElement = (props) => {
    // data =;
    return (
        <>
        <h3>URL: {props.item.url}</h3>
        <p>METHOD: {props.item.method}</p>
        <p>REQUEST DATA: {props.item.reqData}</p>
        <p>RETRIEVED DATA: {props.item.data}</p>
        </>
    )
}

const History = (props) => {

    let apiHistoryElements = props.apiHistory.map(item => {
        return <HistoryElement item={item}/>
    });

    return (
        <>
        {apiHistoryElements}
        </>
    )
}

export default History;