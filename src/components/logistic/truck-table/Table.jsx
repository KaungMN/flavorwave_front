// import { func } from "prop-types";
import Paginator from './Pagination';
import { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
// import AddStaff from "../Add";

function TableComponent({ data }) {
    let [filterData, setFilterData] = useState(data);
    const [trucks, setTrucks] = useState(null);

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
        let result = dummyData.filter((item) => {
            return item.truck_number.toLowerCase().includes(name.toLowerCase());
        });
        setFilterData(result.length > 0 ? result : order);
    }

    const getTrucks = async () => {
        const res = await axios.get('http://localhost:8000/api/get-trucks');
        const datas = res.data;
        console.log(datas);
        setTrucks(datas);
    };

    useEffect(async () => {
        await getTrucks();
        return () => {
            second;
        };
    }, [third]);

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
                    {/* <Col>
            <AddStaff initialData={filterData} />
          </Col> */}
                </Row>
            </div>
            <Paginator data={trucks} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
