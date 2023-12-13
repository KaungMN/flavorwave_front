import TableComponent from '../../components/admin/product/table/Table';
import { Container } from 'react-bootstrap';

function product() {
    return (
        <Container>
            <h2>Product</h2>
            <TableComponent />
        </Container>
    );
}

export default product;
