import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from 'react-bootstrap/Badge';
import './history.scss'

// onClick={props.removeFromApiHistory(index)

const History = (props) => {

    const handleSetDataAndRequestParams = (item) => {
        console.log('ITEM:', item);
        props.setData(item.data);
        props.setRequestParams(item.requestParams);
    }

    let apiHistoryElements = props.apiHistory.map((item, index) => {
        return (
            <ListGroup.Item key={index} action onClick={()=> handleSetDataAndRequestParams(item)}
                as="li"
                className="d-flex justify-content-between align-items-start text-wrap"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">{item.requestParams.url}</div>
                </div>
                <Badge bg="primary" pill>
                 {item.requestParams.method}
                </Badge>
            </ListGroup.Item>
        );
    });

    return (
        <>
        <Offcanvas placement="end" show={props.showHistory} onHide={props.handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>History</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup as="ol" numbered>
                    {apiHistoryElements}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
        {/*apiHistoryElements */}
        </>
    )
}

export default History;