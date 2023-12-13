import AddTruckModal from '../TruckModal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function TableSingleRow({ header, order }) {
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalData, setTotalData] = useState({});

    const handleCheckboxChange = (event, item) => {
        const selectedIndex = selectedItems.indexOf(item);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedItems, item);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedItems.slice(1));
        } else if (selectedIndex === selectedItems.length - 1) {
            newSelected = newSelected.concat(selectedItems.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedItems.slice(0, selectedIndex),
                selectedItems.slice(selectedIndex + 1)
            );
        }
        setSelectedItems(newSelected);
    };

    useEffect(() => {
        setTotalData({ totalOrder: [...selectedItems], totalQuantity: totalQuantity });
    }, [selectedItems]);

    const isSelected = (item) => selectedItems.indexOf(item) !== -1;

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Select Order</th>
                        <th>#</th>
                        {header.map((item) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {order.map((item, id) => (
                        <tr key={id}>
                            <td>
                                <Form>
                                    <Form.Check
                                        value={item}
                                        checked={isSelected(item)}
                                        onChange={(event) => {
                                            event.target.checked
                                                ? setTotalQuantity(
                                                      (totalQuantity) => (totalQuantity += item.orderQuantity)
                                                  )
                                                : setTotalQuantity(
                                                      (totalQuantity) => (totalQuantity -= item.orderQuantity)
                                                  );
                                            handleCheckboxChange(event, item);
                                        }}
                                        type="checkbox"
                                    />
                                </Form>
                            </td>
                            <td>{id + 1}</td>

                            <td key={item.orderItem}>{item.orderItem}</td>
                            <td key={item.orderQuantity}>{item.orderQuantity}</td>
                            <td key={item.salesPermit}>{item.salesPermit}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}>Total Quantity</td>
                        <td colSpan={3}>{totalQuantity}</td>
                    </tr>
                </tbody>
            </Table>
            {/* <Button variant="contained" onClick={handleSubmit}>
                Submit
            </Button> */}
            {staffId >= 2 ? <AddTruckModal initialData={totalData} /> : null}
        </>
    );
}
