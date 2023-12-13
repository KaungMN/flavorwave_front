import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./current.css";

export default function Current() {
  const location = useLocation();

  return (
    <div className="current-path-section mx-auto">
      <Container className="current-path-container">
        <span style={{ fontSize: "22px" }}>{location.pathname === "/" ? "/home" : location.pathname}</span>
      </Container>
    </div>
  );
}
