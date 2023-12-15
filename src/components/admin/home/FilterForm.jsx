import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useEffect, useState } from "react";
import {sellCounts } from './productsSellCount';


const year = ["2020", "2021", "2022","2023"];


export default function FilterForm() {
  const [products,setProducts] = useState(sellCounts);
  const[selectedSellCount,setSelectedSellCount] = useState(null);
  const[totalCount,setTotalCount] = useState(null);
  const[damageCount,setDamageCount] = useState(null);
  const [priceChanges,setPriceChanges] = useState(null);
  const [product,setProduct] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const productTotalCount = async(productName,targetYear)=>{
    
    const res = await axios.post(`http://localhost:8000/api/get-total-count/${productName}/${targetYear}`);
    const datas = res.data;
    console.log(datas)
    setTotalCount(datas)
  }

  // const productDamageCount = async(productId)=>{
  //   const res = await axios.post('https://localhost:8000/api/get-damage-return-count',{
  //     id:productId
  //   });
  //   const datas = res.data;
  //   setDamageCount(datas)
  // }

  const productPriceChanges = async(productName) => {
    const res = await axios.post(`https://localhost:8000/api/get-product-prices-change/${productName}`);
    const datas = res.data;
    console.log(datas);
    setPriceChanges(datas)
  }

  const getProduct = async(id) => {
    const res = await axios.get('https://localhost:8000/api/get-product/'+id);
    const datas = res.data;
    setProduct(datas)
    console.log(datas)
  }

  const onSubmit = async(data) => {
    await productTotalCount(data.productName,data.year);
    // await productPriceChanges(data.productName);
    sellCounts.filter(async(p)=>{
      
      if(p.target_year == data.year && p.product_name == data.productName[0]){
        
      setSelectedSellCount(p.sell_count);
      console.log(selectedSellCount)
      
      // await productDamageCount(product_id)
      // await productPriceChanges(product?.id,data.year)
      // console.log(totalCount);
      // console.log(priceChanges)
      }
    })

  };

 
  const getProducts = async() => {
    const res = await axios.get('http://localhost:8000/api/product');
    const products = res.data;
    console.log(products)
    setProducts(products)
  }

  // useEffect(()=>{
  //   getProducts()
  // },[])

// Printing the updated sellCounts array
console.log(sellCounts);
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
                <option disabled selected defaultValue={""}>
                  Choose Product
                </option>
                {products?.map((t) => (
                  <option key={t.id} value={t.id}>
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
                <option disabled selected defaultValue={""}>
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
