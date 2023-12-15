import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { sellCounts } from './productsSellCount';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios"

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      console.log("fetch data ")
      setFetchedData(sellCounts)
    }
    fetchChartData();
  }, [])

  const [userData, setUserData] = useState({
    labels: fetchedData?.map((data) => data.product_name),
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

  const handleChange = (e) => {
    console.log(e.target.value)
    if (e.target.value == "sale_amount") {
      setUserData(
        {
          labels: fetchedData?.map((data) => data.product_name),
          datasets: [
            {
              label: "Sale Amount",
              data: fetchedData?.map((data) => data.sale_amount),
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
          labels: fetchedData?.map((data) => data.product_name),
          datasets: [
            {
              label: "Sell Count",
              data: fetchedData?.map((data) => data.sell_count),
              backgroundColor: [
                "#b593d2",
                "#eff1ec",
                "#77b6a6",
                "#90cb79",
                "#628ec7",
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
          labels: fetchedData?.map((data) => data.product_name),
          datasets: [
            {
              label: "Popularity",
              data: fetchedData?.map((data) => data.popularity),
              backgroundColor: [
                "#c49387",
                "#eef1ec",
                "#7e77ae",
                "#d794cd",
                "#719fc4",
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
    <Container  className="d-flex flex-column justify-content-center align-items-center"
    style={{ minHeight: '100vh' }}>
      {!fetchedData ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> :
        <>
          <Form.Select className="mb-4 " size="sm" style={{ width: '250px' , marginBottom :'70px'}} id="category" name="category" required onChange={handleChange}>
            <option disabled selected defaultValue={""}>Choose Category</option>
            <option value="sale_amount">Sale Amount</option>
            <option value="sell_count">Sell Count</option>
            <option value="popularity">Popularity</option>
          </Form.Select>
              <div style={{ width: 700 ,marginBottom : '50px'}}>
                <BarChart chartData={userData} />
              </div>
              <div style={{ width: 700 , marginBottom : '60px'}}>
                <LineChart chartData={userData} />
              </div>
              <div style={{ width: 500 }}>
                <PieChart chartData={userData} />
              </div>
        </>
      }
    </Container>
  );
}

export default App;
