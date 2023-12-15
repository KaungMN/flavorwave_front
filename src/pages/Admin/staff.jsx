import TableComponent from '../../components/admin/staff/table/Table';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState, useContext } from 'react';
import { ReloadingContext } from '../../actions/ReloadContext';
import axios from 'axios';

function Staff() {
    const [data, setData] = useState(null);
    const { reload } = useContext(ReloadingContext);

    async function getStaffs() {
        const res = await axios.get('http://localhost:8000/api/get-staffs');
        const datas = res.data;
        console.log(datas);
        setData(datas);
    }

    useEffect(() => {
        getStaffs();
    }, [reload]);

    return (
        <Container>
            {data ? (
                <TableComponent data={data} />
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Container>
    );
}

export default Staff;
