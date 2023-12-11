import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./sidebar.css";
import Button from "react-bootstrap/Button";

const heading = ["a", "b", "c", "d", "e"];
const content = ["some", "thing", "bigger", "d", "e"];

function TableComponent() {
  return (
    <Container>
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
          <tr>
            <td>1</td>
            {content.map((item) => (
              <td key={item}>{item}</td>
            ))}
            <td>
              <Button variant="outline-secondary">Secondary</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default TableComponent;
