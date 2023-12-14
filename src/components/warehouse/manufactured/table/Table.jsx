import { func } from 'prop-types';
import Paginator from './Pagination';
import { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AddProduct from "../Add";
const heading = ['Product', 'Raw Material', 'Price', 'Total Quantity', 'Release Date'];

function TableComponent( { data } ) {
    let [filterData, setFilterData] = useState(data);

    const handleDelete = async (id) => {
        try {
            console.log(id);
            // api.delete(`posts/${id}`);
            // const updatedPostList = postList.filter(post => post.id !== id);
            // setPostList(updatedPostList);
            // navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    function filterQuantity(name) {
        console.log(name);
        let result = data.filter((item) => {
            return item.orderItem.toLowerCase().includes(name.toLowerCase());
        });
        setFilterData(result.length > 0 ? result : data);
    }
    return (
        <Container>
            <div className="mb-4">
                <Row>
                    <Col sm={5}>
                        <Form.Label>Search Product Name: </Form.Label>
                        <Form.Control
                            size="md"
                            type="text"
                            onChange={(e) => {
                                filterQuantity(e.target.value);
                            }}
                        />
                    </Col>
                    <Col>
                    <AddProduct />
                    </Col>
                </Row>
            </div>
            <Paginator heading={heading} data={filterData} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
