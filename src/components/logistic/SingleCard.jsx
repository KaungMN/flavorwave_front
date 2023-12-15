import { Row, Col, Card, Button } from 'react-bootstrap';
import ApproveDeliveryModal from './ApproveDelivery';
import CancelDeliveryModal from './CancelDelivery';
import logo from '../../images/Logo (1).png';

function InfoCard({ data }) {
    // let staffId = JSON.parse(sessionStorage.getItem("staffId"));

    return (
        <Card style={{ width: '450px', height: '220px', margin: '30px auto' }}>
            <Row>
                <Col xs={4}>
                    <img className="mt-4" src={logo} width="150" height="150" />
                </Col>
                <Col>
                    <Card.Body className="mb-3 mx-auto">
                        <Card.Title style={{ paddingRight: '41px' }}>Order Data</Card.Title>
                        <Card.Text className="d-block  text-start px-4">
                            <div>Preorder Id: {data.preorder_id}</div>
                            <div>Truck Info: {data.truck.truck_number + data.truck.truck_name}</div>
                            <div>Delivery Date: {data.delivery_date}</div>
                        </Card.Text>
                        <ApproveDeliveryModal initialData={data} />
                        <CancelDeliveryModal />
                        {/* {staffId >= 2 ?  : null} */}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default InfoCard;
