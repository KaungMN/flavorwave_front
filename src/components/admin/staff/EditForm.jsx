import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useEffect, useState } from "react";



export default function EditForm({ heading, data, setShow }) {

    const [staff,setStaff] = useState(null);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role_id: data.role_id,
        department_id: data.department_id,
        salary: data.salary,
        entry_date: data.entry_date
    }
  });

 

//   const getStaff = async(id) => {
//     const res = await axios.get('http://localhost:8000/api/show-staff/'+id);
//     const datas = res.data;
//     setStaff(datas)
//     console.log(staff);
//   }

  const onSubmit = async(value) => {
    const res = await axios.put(`http://localhost:8000/api/update-staff/${data?.id}`,value)
    const datas = res.data;
    console.log(datas);

  }


  return (
      <div className="contact-form-section" style={{ textAlign: 'left', maxWidth: '500px' }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                  <Row>
                      <Col>
                          <Form.Group className="mb-3">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                  id="name"
                                  name="name"
                                  size="md"
                                  type="text"
                                  required
                                  {...register('name', { required: true })}
                              />
                          </Form.Group>
                          <Form.Group className="mb-3">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                  id="email"
                                  name="email"
                                  size="md"
                                  type="text"
                                  required
                                  {...register('email', { required: true })}
                              />
                          </Form.Group>
                          <Form.Group className="mb-3">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                  id="password"
                                  name="password"
                                  defaultValue={data.Permit}
                                  size="md"
                                  type="password"
                                  required
                                  {...register('password', { required: true })}
                              />
                          </Form.Group>
                          <Form.Select
                              id="role_id"
                              name="role_id"
                              size="md"
                              required
                              {...register('role_id', { required: true })}
                          >
                              <option disabled selected value={''}>
                                  Choose Role
                              </option>
                              {['manager', 'senior', 'junior'].map((t, id) => (
                                  <option key={t} value={id + 1}>
                                      {t}
                                  </option>
                              ))}
                          </Form.Select>
                      </Col>
                      <Col>
                          <Form.Group className="mb-3">
                              <Form.Label>Salary</Form.Label>
                              <Form.Control
                                  id="salary"
                                  name="salary"
                                  size="md"
                                  type="number"
                                  required
                                  {...register('salary', { required: true })}
                              />
                          </Form.Group>
                          <Form.Group className="mb-3">
                              <Form.Label>Entry Date</Form.Label>
                              <Form.Control
                                  id="entryDate"
                                  name="entryDate"
                                  size="md"
                                  type="date"
                                  required
                                  {...register('entry_date', { required: true })}
                              />
                          </Form.Group>
                          <Form.Group className="mb-3">
                              <Form.Label>Phone</Form.Label>
                              <Form.Control
                                  id="phone"
                                  name="phone"
                                  size="md"
                                  type="number"
                                  required
                                  {...register('phone', { required: true })}
                              />
                          </Form.Group>
                          <Form.Select
                              id="department_id"
                              name="department_id"
                              size="md"
                              required
                              {...register('department_id', { required: true })}
                          >
                              <option disabled selected value={''}>
                                  Choose Department
                              </option>
                              {['sales', 'logistic', 'factory', 'warehouse'].map((t, id) => (
                                  <option key={t} value={id + 1}>
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
                      <Button className="me-2" variant="outline-secondary" onClick={() => setShow(false)}>
                          Cancel
                      </Button>
                  </div>
              </div>
          </Form>
      </div>
  );
}
