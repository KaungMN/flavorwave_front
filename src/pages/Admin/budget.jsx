import TableComponent from '../../components/admin/budget/table/Table';
import Container from 'react-bootstrap/Container';
import { useState, useEffect, useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { ReloadingContext } from '../../actions/ReloadContext';

function Budget() {
    const [data, setData] = useState();
    const { reload } = useContext(ReloadingContext);

    async function getBudgets() {
        const res = await axios.get('http://localhost:8000/api/get-budgets');
        const datas = res.data;
        setData(datas);
    }

    useEffect(() => {
        getBudgets();
    }, [reload]);

  const [budgets,setBudgets] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`http://localhost:8000/api/get-budgets`);
            const datas = await res.json();
            console.log(datas);
            setBudgets(datas)
        };
        fetchInfo();
    }, []);

  return (
    <Container>
      {budgets ? <TableComponent data={budgets} />
        : <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </Container>
  );
}

export default Budget;
