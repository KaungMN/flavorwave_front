import React, { useEffect, useState, useContext } from 'react';
import TableComponent from '../../components/logistic/truck-table/Table';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { ReloadingContext } from '../../actions/ReloadContext';

// const dummyData = [
//     { id: 1, truck_number: 'fda', truck_name: 'TOYOTA', capacity: 500, staff_id: 3 },
//     { id: 1, truck_number: 'erw', truck_name: 'TOYOTA', capacity: 500, staff_id: 3 },
//     { id: 1, truck_number: 'ehrq', truck_name: 'TOYOTA', capacity: 500, staff_id: 3 }
// ];

function Truck() {
    const [trucks, setTrucks] = useState(null);
    const { reload } = useContext(ReloadingContext);

    const getTrucks = async () => {
        const res = await axios.get('http://localhost:8000/api/get-trucks');
        const datas = res.data;
        console.log(datas);
        setTrucks(datas);
    };

    useEffect(() => {
        getTrucks();
    }, [reload]);

    return (
        <>
            <h3>Trucks</h3>
            {trucks ? (
                <TableComponent data={trucks} />
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </>
    );
}

export default Truck;
