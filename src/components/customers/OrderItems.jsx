import { Dropdown, DropdownButton } from "react-bootstrap";

function OrderItemsDropDown({ data }) {
  return (
    <DropdownButton
      size="sm"
      variant="outline-primary"
      title="Dropdown button"
    >
      <Dropdown.Item>
        Item <span style={{ float: "right" }}>Quantity</span>
      </Dropdown.Item>
      <Dropdown.Divider />
      {data.map((i) => (
        <Dropdown.Item key={i.name}>
          {i.name}
          <span style={{ float: "right" }}>{+i.quantity}</span>
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default OrderItemsDropDown;
