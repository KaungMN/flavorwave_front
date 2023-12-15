// import { func } from "prop-types";
import Paginator from './Pagination';
import { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AddTruck from './Add';

function TableComponent({ data }) {
    let [filterData, setFilterData] = useState();

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
            return item.truck_number.toLowerCase().includes(name.toLowerCase());
        });
        setFilterData(result.length > 0 ? result : order);
    }

    return (
        <Container>
            <div className="mb-4">
                <Row>
                    <Col xs={4}>
                        <Form.Label>Search Truck Number: </Form.Label>
                        <Form.Control
                            size="md"
                            type="text"
                            onChange={(e) => {
                                filterQuantity(e.target.value);
                            }}
                        />
                    </Col>
                    <Col>
                        <AddTruck />
                    </Col>
                </Row>
            </div>
            <Paginator data={data} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
