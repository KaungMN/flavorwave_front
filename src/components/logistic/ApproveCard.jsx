import InfoCard from './SingleCard';
import { Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function ApproveDeliveryCard({ data }) {
    return (
        <Row>
            {data?.map((i) =>
                i.status !== 'approved' ? (
                    <InfoCard key={i.orderItem} data={i} />
                ) : (
                    <>
                        <h5>There is nothing to Deliver</h5>
                        <Spinner style={{ margin: '0 auto' }} animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </>
                )
            )}
        </Row>
    );
}
