import TableComponent from '../../components/admin/budget/table/Table';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

// const budget = [
//   {
//     department_id: "sale",
//     target_year: 200,
//     planned_budget: 4534,
//     spent_budget: 34543
//   },
//   {
//     department_id: "sale",
//     target_year: 2054,
//     planned_budget: 4534,
//     spent_budget: 34543
//   },
//   {
//     department_id: "sale",
//     target_year: 2040,
//     planned_budget: 4534,
//     spent_budget: 34543
//   },
//   {
//     department_id: "sale",
//     target_year: 2000,
//     planned_budget: 4534,
//     spent_budget: 34543
//   }
// ]

function Budget() {
    const [data, setData] = useState();

    async function getBudgets() {
        const res = await axios.get('http://localhost:8000/api/get-budgets');
        const datas = res.data;
        setData(datas);
    }

    useEffect(() => {
        getBudgets();
    }, []);

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

export default Budget;
