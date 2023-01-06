import './history.scss'

const HistoryElement = (props) => {
    // data =;
    return (
        <>
            {console.log("History Element:", props.item)}
            <h3>URL: {props.item.url}</h3>
            <p>METHOD: {props.item.method}</p>
            {/* the objects will need <pre> tags */}
            {/* change font for data */}
            {/*<p>REQUEST DATA: {props.item.reqData}</p>
            <p>RETRIEVED DATA: {props.item.data}</p> */}
        </>
    )
}

const History = (props) => {

    let apiHistoryElements = props.apiHistory.map((item, index) => {
        return <HistoryElement key={index} item={item}/>
    });

    return (
        <>
        {apiHistoryElements}
        </>
    )
}

export default History;