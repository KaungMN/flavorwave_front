import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useEffect, useState } from "react";
import {sellCounts} from "../../../data/productsSellCount"

const year = ["2019", "2020", "2021", "2022","2023"];


export default function FilterForm({ heading }) {
  const [products,setProducts] = useState(null);
  const[selectedSellCount,setSelectedSellCount] = useState(null);
  const[totalCount,setTotalCount] = useState(null);
  const[damageCount,setDamageCount] = useState(null);
  const [priceChanges,setPriceChanges] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const productTotalCount = async(productName,targetYear)=>{
    const product = products?.find(p=>{
      return p.name == productName
    });
    const res = await axios.post('http://localhost:8000/api/get-total-count',{
      product_id:product?.id,
      targetYear
    });
    const datas = res.data;
    setTotalCount(datas)
  }

  const productDamageCount = async(productId)=>{
    const res = await axios.post('https://localhost:8000/api/get-damage-return-count',{
      id:productId
    });
    const datas = res.data;
    setDamageCount(datas)
  }

  const productPriceChanges = async(productId,year) => {
    const res = await axios.post('https://localhost:8000/api/get-product-prices-change',{
      year:year,
      product_id:productId
    });
    const datas = res.data;
    setPriceChanges(datas)
  }

  const onSubmit = (data) => {

    sellCounts.filter((p)=>{
      // if(){
        console.log(p.product_name)
      console.log(data)
      //   setSelectedSellCount(p);
      // }
    })
    console.log(selectedSellCount)

    
  };

  const getProducts = async() => {
    const res = await axios.get('http://localhost:8000/api/product');
    const products = res.data;
    console.log(products)
    setProducts(products)
  }

  useEffect(()=>{
    getProducts()
  },[])

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
                {products?.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
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
