import ChartTest from "../../components/admin/home/Chart";
import Container from "react-bootstrap/Container";
import FilterForm from "../../components/admin/home/FilterForm";

function Admin() {
  return (
    <Container>
      <h1>Admin</h1>
      <FilterForm />
      <ChartTest />
    </Container>
  );
}

export default Admin;
