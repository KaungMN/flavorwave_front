import InfoCard from './SingleCard';
import { Row } from 'react-bootstrap';

export default function ApproveDeliveryCard({data}) {
    

    return <Row>{data?.map((i) => i.status !== 'approved' && <InfoCard key={i.orderItem} data={i} />)}</Row>;
}
