import { prettyPrintJson } from "pretty-print-json";

import './history.scss'

const HistoryElement = (props) => {
    // data =;
    return (
        <>
            {console.log("History Element:", props.item)}
            <h3>URL: {props.item.url}</h3>
            <p>METHOD: {props.item.method}</p>
            {/* change font for data */}
            <pre dangerouslySetInnerHTML={{ __html: prettyPrintJson.toHtml(props.item.reqData) }} />
            <pre dangerouslySetInnerHTML={{ __html: prettyPrintJson.toHtml(props.item.data) }} />
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