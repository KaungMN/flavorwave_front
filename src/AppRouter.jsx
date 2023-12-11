import Sidebar from "./shared/SideBar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Customer from "./Customer";
import Factory from "./pages/factory";
import Sales from "./pages/sales";
import Logstic from "./pages/logstic";
import Warehouse from "./pages/warehouse";
import Admin from "./pages/admin";
import Nomatch from "./pages/nomatch";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Customer />} />
        <Route path="factory" element={<Factory />} />
        <Route path="admin" element={<Admin />} />
        <Route path="logstic" element={<Logstic />} />
        <Route path="warehouse" element={<Warehouse />} />
        <Route path="sales" element={<Sales />} />
      </Route>
      <Route path="*" element={<Nomatch />} />
    </>
  )
);
