import React, { useState } from 'react'
import Select from 'react-select'
import { Container, Col, Form, Row } from "react-bootstrap";
import Table from './table/Table'

function SelectRaw() {

    const [selectedValue, setSelectedValue] = useState();

    const handleSelectChange = (selectedOption) => {
        setSelectedValue({ ...selectedOption });
        console.log(selectedValue);
    };

    const [data, setData] = useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]);

    return <Container>
        <Row>
            <Col>
                <h4>Raw Materials</h4>
                <Select
                    options={data}
                    isMulti
                    onChange={ (e)=>handleSelectChange(e   )}
                /> ;
            </Col>
            <Col>
                <h4>Supplier</h4>
                <Form.Select size="sm" required defaultValue="Supplier Name">
                    <option disabled>Customer Type</option>
                    <option>Keyholder</option>
                    <option>Distributor</option>
                    <option>Wholesale</option>
                </Form.Select>
            </Col>
        </Row>

        <Table/>
    </Container>
}

export default SelectRaw;