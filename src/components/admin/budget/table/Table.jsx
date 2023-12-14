// import { func } from "prop-types";
import Paginator from './Pagination';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AddStaff from '../Add';

function TableComponent({ data }) {
    let [filterData, setFilterData] = useState(data);
    const [budgets, setBudgets] = useState(null);

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

    async function getBudgets() {
        const res = await axios.get('http://localhost:8000/api/get-budgets');
        const datas = res.data;
        setBudgets(datas);
    }

    useEffect(() => {
        getBudgets();
    }, []);
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
            <Paginator data={budgets} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
