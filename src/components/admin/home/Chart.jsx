import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import { sellCounts } from './productsSellCount';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios"

function App() {
  const [userData, setUserData] = useState({
    labels: sellCounts.map((data) => data.product_name),
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // const getBudgets = async() => {
  //   const response = await axios.get('http://localhost:8000/api/getBudgets?year=2023');
  //   console.log(response.data)
  // }

  // useEffect(()=>{
  //   getBudgets()
  // },[])

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
  const handleChange = (e) => {
    console.log(e.target.value)
    if (e.target.value == "sale_amount") {
      setUserData(
        {
          labels: sellCounts.map((data) => data.product_name),
          datasets: [
            {
              label: "Sale Amount",
              data: sellCounts.map((data) => data.sale_amount),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }
      );
    }
    if (e.target.value == "sell_count") {
      setUserData(
        {
          labels: sellCounts.map((data) => data.product_name),
          datasets: [
            {
              label: "Sell Count",
              data: sellCounts.map((data) => data.sell_count),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }
      );
    }

    if (e.target.value == "popularity") {
      setUserData(
        {
          labels: sellCounts.map((data) => data.product_name),
          datasets: [
            {
              label: "Popularity",
              data: sellCounts.map((data) => data.popularity),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }
      );
    }

  };
  return (

    <Container>
      <Form.Select className="mb-4 " size="sm" style={{ width: '250px' }} id="category" name="category" required onChange={handleChange}>
        <option disabled selected defaultValue={""}>Choose Category</option>
        <option value="sale_amount">Sale Amount</option>
        <option value="sell_count">Sell Count</option>
        <option value="popularity">Popularity</option>
      </Form.Select>
      <Row>
        <Col sm={7}  className="mb-4 ml-5" >
          <BarChart chartData={userData} />
        </Col>
      </Row>
      <Row>
        <Col sm={7}  className="mb-5 ml-5" >
          <LineChart chartData={userData} />
        </Col>
      </Row>
      <Row>
        <Col sm={7}  className="ml-5" >
          <PieChart chartData={userData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
