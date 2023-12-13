import TableComponent from "../../components/factory/product/table/Table";
import { Container } from "react-bootstrap";
import MultiSelectTable from "./SelectTable";

function factory() {
  return (
    <Container>
      <MultiSelectTable />
      <h2>Factory</h2>
      <TableComponent />
    </Container>
  );
}

export default factory;
