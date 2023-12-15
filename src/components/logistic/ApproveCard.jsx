import InfoCard from './SingleCard';
import { Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function ApproveDeliveryCard({ data }) {
    let truckData = data?.filter((i) => i.status !== 'approved');
    console.log(truckData);

    return (
        <Row>
            {truckData.length > 0 ? (
                <InfoCard key={i.orderItem} data={i} />
            ) : (
                <>
                    <h5>There is nothing to Deliver</h5>
                    <Spinner style={{ margin: '0 auto' }} animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            )}
        </Row>
    );
}
