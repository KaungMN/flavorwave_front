import { func } from "prop-types";
import Paginator from "./Pagination";
import { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

const heading = ["orderItem", "orderQuantity", "salesPermit"];
const order = [
  {
    rawId :1,
    rawMaterial: "Rice",
  },
  {
    rawId :2,
    rawMaterial: "Bread",
  },  {
    rawId :3,
    rawMaterial: "Wheat",
  },  {
    rawId :4,
    rawMaterial: "Bread",
  },  {
    rawId :5,
    rawMaterial: "wheat",
  },
];

function TableComponent() {
  return (
    <Container>
      <Paginator data={order}/>
    </Container>
  );
}

export default TableComponent;
