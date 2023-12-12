import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const truck = ["Suzuki", "Mercedes", "Toyota", "Honda"];

export default function EditForm({ data }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      orderItem: data.orderItem,
      orderQuantity: data.orderQuantity,
      salesPermit: data.salesPermit,
      truck: "Choose Truck",
    },
  });

  //   useForm({
  //   defaultValues: async () => fetch('/api-endpoint')
  // })

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="contact-form-section"
      style={{ textAlign: "left", maxWidth: "500px" }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Label>OrderItem: </Form.Label>
              <Form.Control
                disabled
                readOnly
                // defaultValue={data.orderItem}
                size="sm"
                type="text"
                {...register("orderItem")}
              />
            </Col>
            <Col>
              <Form.Label>OrderQuantity: </Form.Label>
              <Form.Control
                disabled
                readOnly
                // defaultValue={data.orderQuantity}
                size="sm"
                type="text"
                {...register("orderQuantity")}
              />
            </Col>
          </Row>
        </div>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Label>SalesPermit: </Form.Label>
              <Form.Control
                disabled
                readOnly
                // defaultValue={data.salesPermit}
                size="sm"
                type="text"
                {...register("salesPermit")}
              />
            </Col>
            <Col>
              <Form.Label>Choose Truck: </Form.Label>
              <Form.Select
                size="sm"
                required
                // defaultValue="Choose Truck"
                {...register("truck", { required: true })}
              >
                <option disabled>Choose Truck</option>
                {truck.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <div className="mx-auto my-3 d-flex justify-content-center">
            <Button type="submit" className="me-2 mx-3" variant="success">
              Submit
            </Button>
            <Button
              className="me-2"
              variant="outline-secondary"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
