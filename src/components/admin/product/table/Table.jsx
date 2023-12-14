// import { func } from "prop-types";
import Paginator from './Pagination';
import { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AddStaff from '../Add';

const heading = ['Product Name', 'Raw Material', 'Price', 'Description'];
const order = [
    {
        orderItem: 'Product A',
        orderQuantity: 5,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product B',
        orderQuantity: 10,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product C',
        orderQuantity: 8,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product D',
        orderQuantity: 15,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product E',
        orderQuantity: 3,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product F',
        orderQuantity: 7,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product G',
        orderQuantity: 12,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product H',
        orderQuantity: 4,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product I',
        orderQuantity: 6,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product J',
        orderQuantity: 9,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product K',
        orderQuantity: 11,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product L',
        orderQuantity: 13,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product M',
        orderQuantity: 2,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product N',
        orderQuantity: 14,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product O',
        orderQuantity: 20,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product P',
        orderQuantity: 18,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product Q',
        orderQuantity: 16,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product R',
        orderQuantity: 1,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product S',
        orderQuantity: 17,
        salesPermit: 'approved',
        sales: 'app',
    },
    {
        orderItem: 'Product T',
        orderQuantity: 19,
        salesPermit: 'approved',
        sales: 'app',
    }
];

function TableComponent() {
    let [filterData, setFilterData] = useState(order);

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
            <Paginator heading={heading} data={filterData} handleDelete={handleDelete} />
        </Container>
    );
}

export default TableComponent;
