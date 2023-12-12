import SelectRaw from "../components/factory/SelectRaw";
import { Container } from "react-bootstrap";

function factory() {
  return <Container>
    <h2>Factory</h2>
    <SelectRaw/>
  </Container>;
}

export default factory;
