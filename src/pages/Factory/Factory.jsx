import TableComponent from '../../components/factory/product/table/Table';
import { Container } from 'react-bootstrap';

function factory() {
    return (
        <Container>
            <h2>Factory</h2>
            <TableComponent />
        </Container>
    );
}

export default factory;
