// import { func } from "prop-types";
import Paginator from './Pagination';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AddStaff from '../Add';
import axios from "axios"

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
            return item.target_year.toString().includes(name.toString().toLowerCase());
        });
        setFilterData(result.length > 0 ? result : data);
    }

    return (
        <Container>
            <div className="mb-4">
                <Row>
                    <Col xs={4}>
                        <Form.Label>Search Target Year: </Form.Label>
                        <Form.Control
                            size="md"
                            type="number"
                            onChange={(e) => {
                                filterQuantity(e.target.value);
                            }}
                        />
                    </Col>
                    <Col>
                        <AddStaff initialData={filterData} />
                    </Col>
                </Row>
            </div>
            <Paginator data={filterData ? filterData : data} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
