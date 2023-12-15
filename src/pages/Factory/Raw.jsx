import RawCard from '../../components/factory/RawCard';
import { Row, Col, Container } from 'react-bootstrap';

const data = [
    {
        rawId: 1,
        rawMaterial: 'Rice'
    },
    {
        rawId: 2,
        rawMaterial: 'Bread'
    },
    {
        rawId: 3,
        rawMaterial: 'Wheat'
    },
    {
        rawId: 4,
        rawMaterial: 'Bread'
    },
    {
        rawId: 5,
        rawMaterial: 'wheat'
    }
];

function Raw() {
    return (
        <Container>
            <h2>Factory</h2>
            {data ? (
                <Row>
                    <RawCard data={data} />
                </Row>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Container>
    );
}

export default Raw;
