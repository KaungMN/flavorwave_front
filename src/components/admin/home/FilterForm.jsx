import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const year = ["2021", "2022", "2023", "2024"];
const product = ["apple", "banana", "orange", "pineapple", "dragon fruit"];

export default function FilterForm({ heading }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="contact-form-section"
      style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Label>Product Name</Form.Label>
              <Form.Select
                id="product"
                name="product"
                size="md"
                required
                // defaultValue="Choose product"
                {...register("productName", { required: true })}
              >
                <option disabled selected value={""}>
                  Choose Product
                </option>
                {product.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Choose Year: </Form.Label>
              <Form.Select
                id="year"
                name="year"
                size="md"
                required
                // defaultValue="Choose year"
                {...register("year", { required: true })}
              >
                <option disabled selected value={""}>
                  Choose Year
                </option>
                {year.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Button
            type="submit"
            className="mt-4 d-block mx-auto"
            variant="success"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
