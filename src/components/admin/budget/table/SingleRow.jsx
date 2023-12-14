import Edit from "../EditBudget";
import Table from "react-bootstrap/Table";

const heading = ["Department", "Target Year", "Planned Budget", "Spent Budget"];

export default function TableSingleRow({ order, handleDelete }) {
  let staffId = JSON.parse(sessionStorage.getItem("staffId"));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {heading.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {order.map((item, id) => (
          <tr key={id}>
            <td>{id + 1}</td>
            <td>{item.department_id}</td>
            <td>{item.target_year}</td>
            <td>{item.planned_budget}</td>
            <td>{item.spent_budget}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
