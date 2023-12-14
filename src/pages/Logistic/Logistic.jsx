// import useSWR from "swr";
import TableComponent from "../../components/logistic/table/Table.jsx";
// import { fetcher } from "../actions/fetcher.js";
import { useEffect } from "react";
// import axios from "axios";


function logstic() {

  return (
    <div>
      <h1>logstic</h1>
      <TableComponent />
    </div>
  );
}

export default logstic;
