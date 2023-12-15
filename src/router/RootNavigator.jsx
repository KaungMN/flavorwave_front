import { Routes, Route } from 'react-router-dom';
import Manufactured from '../pages/Warehouse/Manufactured';
import Raw from '../pages/Factory/Raw';
import Sales from '../pages/sales';
import Logistic from '../pages/Logistic/Logistic.jsx';
import Delivery from '../pages/Logistic/Delivery.jsx';
import Warehouse from '../pages/Warehouse/Warehouse.jsx';
import Admin from '../pages/admin/admin';
import Budget from '../pages/Admin/budget';
import Product from '../pages/Admin/product';
import Staff from '../pages/Admin/staff';
import CustomerLogin from '../pages/Customer/CustomerLogin.jsx';
import CustomerSignUp from '../pages/Customer/CustomerSignup.jsx';
import CustomerOrderHistory from '../pages/Customer/CustomerOrderHistory.jsx';
import CustomerProductPage from '../pages/Customer/CustomerProductPage.jsx';
import NoMatch from '../pages/nomatch.jsx';
import Home from '../pages/Home.jsx';
import {
    DEFAULT_ROUTE,
    MANUFACTURED_ROUTE,
    RAW_ROUTE,
    ADMIN_ROUTE,
    ADMIN_LOGIN_ROUTE,
    PRODUCT_ROUTE,
    STAFF_ROUTE,
    BUDGET_ROUTE,
    LOGISTIC_ROUTE,
    LOGISTIC_TRUCK_ROUTE,
    DELIVERY_ROUTE,
    CUSTOMER_LOGIN_ROUTE,
    CUSTOMER_SIGN_UP_ROUTE,
    CUSTOMER_ORDER_ROUTE,
    CUSTOMER_ORDER_HISTORY_ROUTE,
    WAREHOUSE_ROUTE,
    SALES_ROUTE,
    CUSTOMER_ABOUTUS_ROUTE
} from '../constants/routes.js';
import Truck from '../pages/Logistic/Truck.jsx';
import AdminLogin from '../pages/Admin/AdminLogin.jsx';
import AboutUs from '../pages/AboutUs.jsx';

function RootNavigator() {
    return (
        <Routes>
            {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path={DEFAULT_ROUTE} element={<Home />} />
            <Route path={MANUFACTURED_ROUTE} element={<Manufactured />} />
            <Route path={RAW_ROUTE} element={<Raw />} />
            <Route path={ADMIN_ROUTE} element={<Admin />} />
            <Route path={ADMIN_LOGIN_ROUTE} element={<AdminLogin />} />
            <Route path={PRODUCT_ROUTE} element={<Product />} />
            <Route path={STAFF_ROUTE} element={<Staff />} />
            <Route path={BUDGET_ROUTE} element={<Budget />} />
            <Route path={LOGISTIC_ROUTE} element={<Logistic />} />
            <Route path={LOGISTIC_TRUCK_ROUTE} element={<Truck />} />
            <Route path={DELIVERY_ROUTE} element={<Delivery />} />

            <Route path={CUSTOMER_LOGIN_ROUTE} element={<CustomerLogin />} />
            <Route path={CUSTOMER_SIGN_UP_ROUTE} element={<CustomerSignUp />} />
            <Route path={CUSTOMER_ABOUTUS_ROUTE} element={<AboutUs />} />
            <Route path={CUSTOMER_ORDER_ROUTE} element={<CustomerProductPage />} />
            <Route path={CUSTOMER_ORDER_HISTORY_ROUTE} element={<CustomerOrderHistory />} />
            {/* <Route path={CUSTOMER_HISTORY_ROUTE} element={<CustomerOrderHistory />} /> */}
            <Route path={WAREHOUSE_ROUTE} element={<Warehouse />} />
            <Route path={SALES_ROUTE} element={<Sales />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export default RootNavigator;
