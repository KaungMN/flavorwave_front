import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/logistic/truck-table/Table';
import Spinner from 'react-bootstrap/Spinner';


const dummyData = null;
// [
//     { id: 1, truck_number: "fda", truck_name: "TOYOTA", capacity: 500, staff_id: 3 },
//     { id: 1, truck_number: "erw", truck_name: "TOYOTA", capacity: 500, staff_id: 3 },
//     { id: 1, truck_number: "ehrq", truck_name: "TOYOTA", capacity: 500, staff_id: 3 }
// ];

function Truck() {

    const [trucks,setTrucks] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-trucks`);
            const data = await res.json();
            console.log(data);
            setTrucks(data)
        };
        fetchInfo();
    }, []);
    return (


        <>
            <h3>Trucks</h3>
            {trucks ? <TableComponent data={trucks} /> : 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

        </>
    );
}

export default Truck;
