// import { func } from "prop-types";
import Paginator from './Pagination';
import { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AddStaff from '../Add';

const heading = ['Product Name', 'Raw Material', 'Price', 'Description'];

function TableComponent({ order }) {
    let [filterData, setFilterData] = useState();
    const handleDelete = async (id) => {
        try {
            console.log(id);
        } catch (err) {
            console.log(err.message);
        }
    };

    function filterQuantity(name) {
        console.log(name);
        let result = order.filter((item) => {
            return item.orderItem.toLowerCase().includes(name.toLowerCase());
        });
        setFilterData(result.length > 0 ? result : order);
    }
    return (
        <Container>
            <div className="mb-4">
                <Row>
                    <Col sm={9}>
                        <Form style={{ maxWidth: '300px' }}>
                            <Form.Label>Search Product Name: </Form.Label>
                            <Form.Control
                                size="md"
                                type="text"
                                onChange={(e) => {
                                    filterQuantity(e.target.value);
                                }}
                            />
                        </Form>
                    </Col>
                    <Col>
                        <AddStaff initialData={filterData} />
                    </Col>
                </Row>
            </div>
            <Paginator heading={heading} data={filterData ? filterData : order} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
