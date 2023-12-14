import React, { useEffect } from 'react';
import TableComponent from '../../components/logistic/table/Table';

function Truck() {
    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/products`);
            const data = await res.json();
            console.log(data);
        };
        fetchInfo();
    }, []);

    return (
        <>
            <h3>Trucks</h3>
            <TableComponent />
        </>
    );
}

export default Truck;
