import useSWR from "swr";
import TableComponent from "../components/logistic/table/Table.jsx";
import { fetcher } from "../actions/fetcher.js";
import { useEffect } from "react";
import axios from "axios";

function logstic() {
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await fetch(`http://localhost:8000/api/products`);
      const data = await res.json();
      console.log(data);
    };
    fetchInfo();
  }, []);

  return (
    <div>
      <h1>logstic</h1>
      <TableComponent />
    </div>
  );
}

export default logstic;
