import { Routes, Route } from 'react-router-dom';
import Customer from '../pages/Customer/Customer.jsx';
import Factory from '../pages/factory';
import Sales from '../pages/sales';
import Logistic from '../pages/Logistic/Logistic.jsx';
import Delivery from '../pages/Logistic/Delivery.jsx';
import Warehouse from '../pages/Warehouse';
import Admin from '../pages/admin';
import CustomerLogin from '../pages/Customer/CustomerLogin.jsx';
import CustomerSignUp from '../pages/Customer/CustomerSignup.jsx';
import CustomerOrderHistory from '../pages/Customer/CustomerOrderHistory.jsx';
import CustomerProductPage from '../pages/Customer/CustomerProductPage.jsx';
import NoMatch from '../pages/nomatch.jsx';
import Home from '../pages/Home.jsx';
import {
    DEFAULT_ROUTE,
    FACTORY_ROUTE,
    ADMIN_ROUTE,
    LOGISTIC_ROUTE,
    DELIVERY_ROUTE,
    CUSTOMER_ROUTE,
    CUSTOMER_LOGIN_ROUTE,
    CUSTOMER_SIGN_UP_ROUTE,
    CUSTOMER_ORDER_ROUTE,
    CUSTOMER_HISTORY_ROUTE,
    WAREHOUSE_ROUTE,
    SALES_ROUTE
} from '../constants/routes.js';

function RootNavigator() {
    return (
        <Routes>
            {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path={DEFAULT_ROUTE} element={<Home />} />
            <Route path={FACTORY_ROUTE} element={<Factory />} />
            <Route path={ADMIN_ROUTE} element={<Admin />} />
            <Route path={LOGISTIC_ROUTE} element={<Logistic />} />
            <Route path={DELIVERY_ROUTE} element={<Delivery />} />
            <Route path={CUSTOMER_ROUTE} element={<Customer />} />
            <Route path={CUSTOMER_LOGIN_ROUTE} element={<CustomerLogin />} />
            <Route path={CUSTOMER_SIGN_UP_ROUTE} element={<CustomerSignUp />} />
            <Route path={CUSTOMER_ORDER_ROUTE} element={<CustomerProductPage />} />
            <Route path={CUSTOMER_HISTORY_ROUTE} element={<CustomerOrderHistory />} />
            <Route path={WAREHOUSE_ROUTE} element={<Warehouse />} />
            <Route path={SALES_ROUTE} element={<Sales />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export default RootNavigator;
