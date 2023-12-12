import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function EditForm({ heading, data }) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
              <InputGroup size="sm" className="mb-3">
                <Form.Control
                  id="amount"
                  name="amount"
                  type="number"
                  size="sm"
                  required
                  placeholder="Amount in grams"
                  {...register("amount", { required: true })}
                />
                <InputGroup.Text size="sm">g</InputGroup.Text>
              </InputGroup>
              <Form.Select size="sm" required                
               {...register("supplier", { required: true })}>
                <option disabled selected value={""}>Supplier Name</option>
                <option>Keyholder</option>
                <option>Distributor</option>
                <option>Wholesale</option>
              </Form.Select>
            </Col>
          </Row>
          <Button type="submit" className="mt-4 d-block mx-auto" variant="success">
            Done
          </Button>
        </div>
      </Form>
    </div>
  );
}
