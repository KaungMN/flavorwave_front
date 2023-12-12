import Container from "react-bootstrap/Container";
import Paginator from "./Pagination";

const heading = ["orderItem", "orderQuantity", "salesPermit"];
const order = [
  {
    orderItem: "Product A",
    orderQuantity: 5,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product B",
    orderQuantity: 10,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product C",
    orderQuantity: 8,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product D",
    orderQuantity: 15,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product E",
    orderQuantity: 3,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product F",
    orderQuantity: 7,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product G",
    orderQuantity: 12,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product H",
    orderQuantity: 4,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product I",
    orderQuantity: 6,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product J",
    orderQuantity: 9,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product K",
    orderQuantity: 11,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product L",
    orderQuantity: 13,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product M",
    orderQuantity: 2,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product N",
    orderQuantity: 14,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product O",
    orderQuantity: 20,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product P",
    orderQuantity: 18,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product Q",
    orderQuantity: 16,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product R",
    orderQuantity: 1,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product S",
    orderQuantity: 17,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
  {
    orderItem: "Product T",
    orderQuantity: 19,
    salesPermit: "approved",
    sales: "app",
    Permit: "roved",
  },
];

function TableComponent() {
  return (
    <Container>
      <Paginator data={order} />
    </Container>
  );
}

export default TableComponent;
