import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import axios from "axios"

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
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

  const getBudgets = async() => {
    const response = await axios.get('http://localhost:8000/api/getBudgets?year=2023');
    console.log(response.data)
  }

  useEffect(()=>{
    getBudgets()
  },[])

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
      <div className="App" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ width: 700 }}>
              <BarChart chartData={userData} />
          </div>
          <div style={{ width: 700 }}>
              <LineChart chartData={userData} />
          </div>
          <div style={{ width: 700 }}>
              <PieChart chartData={userData} />
          </div>
      </div>
  );
}

export default App;
