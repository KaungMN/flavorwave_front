import RawCard from "../components/factory/RawCard";
import { Container } from "react-bootstrap";

function factory() {
  return (
    <Container>
      <h2>Factory</h2>
      <RawCard />
    </Container>
  );
}

export default factory;
