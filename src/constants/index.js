import { getSessionStorage } from '../utils';
import {
    DEFAULT_ROUTE,
    RAW_ROUTE,
    MANUFACTURED_ROUTE,
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
} from './routes';

export const menuList = [
    {
        route: ADMIN_ROUTE,
        label: 'Admin',
        subMenu: [
            { route: STAFF_ROUTE, label: 'Staff' },
            { route: PRODUCT_ROUTE, label: 'Product' },
            { route: BUDGET_ROUTE, label: 'Budget' }
            // { route: ADMIN_LOGIN_ROUTE, label: 'Admin Login' }
        ]
    },
    { route: SALES_ROUTE, label: 'Sales' },
    {
        route: LOGISTIC_ROUTE,
        label: 'Logistic',
        subMenu: [
            { route: DELIVERY_ROUTE, label: 'Delivery' },
            { route: LOGISTIC_TRUCK_ROUTE, label: 'Truck' }
        ]
    },
    {
        route: DEFAULT_ROUTE,
        label: 'Menubar',
        subMenu: [
            { route: CUSTOMER_ORDER_ROUTE, label: 'Order' },
            { route: CUSTOMER_ABOUTUS_ROUTE, label: 'About Us' }
        ]
    },
    { route: RAW_ROUTE, label: 'Raw' },
    { route: MANUFACTURED_ROUTE, label: 'Manufactured', subMenu: [{ route: WAREHOUSE_ROUTE, label: 'Warehouse' }] }
];

const customerList = [
    {
        route: DEFAULT_ROUTE,
        label: 'Menu',
        subMenu: [
            { route: CUSTOMER_ORDER_ROUTE, label: 'Products' },
            { route: CUSTOMER_ABOUTUS_ROUTE, label: 'About Us' },
            { route: CUSTOMER_ORDER_HISTORY_ROUTE, label: 'Order History' }
        ]
    }
];

const staffList = [
    {
        route: ADMIN_ROUTE,
        label: 'Admin',
        subMenu: [
            { route: STAFF_ROUTE, label: 'Staff' },
            { route: PRODUCT_ROUTE, label: 'Product' },
            { route: BUDGET_ROUTE, label: 'Budget' }
            // { route: ADMIN_LOGIN_ROUTE, label: 'Admin Login' }
        ]
    },
    { route: SALES_ROUTE, label: 'Sales' },
    {
        route: LOGISTIC_ROUTE,
        label: 'Logistic',
        subMenu: [
            { route: DELIVERY_ROUTE, label: 'Delivery' },
            { route: LOGISTIC_TRUCK_ROUTE, label: 'Truck' }
        ]
    },
    { route: MANUFACTURED_ROUTE, label: 'Manufactured', subMenu: [{ route: WAREHOUSE_ROUTE, label: 'Warehouse' }] },
    { route: RAW_ROUTE, label: 'Raw' }
];

const saleList = [{ route: SALES_ROUTE, label: 'Sales' }];

const logisticList = [
    {
        route: LOGISTIC_ROUTE,
        label: 'Logistic',
        subMenu: [
            { route: DELIVERY_ROUTE, label: 'Delivery' },
            { route: LOGISTIC_TRUCK_ROUTE, label: 'Truck' }
        ]
    }
];
const warehouseList = [
    { route: MANUFACTURED_ROUTE, label: 'Manufactured', subMenu: [{ route: WAREHOUSE_ROUTE, label: 'Warehouse' }] }
];
const factoryList = [{ route: RAW_ROUTE, label: 'Raw' }];

export const getMenuList = () => {
    const authToken = getSessionStorage('authToken');
    const staffId = getSessionStorage('staffId');
    if (authToken) return customerList;
    if (staffId === 1) {
        return staffList;
    } else if (staffId === 2) {
        return saleList;
    } else if (staffId === 3) {
        return logisticList;
    } else if (staffId === 4) {
        return warehouseList;
    } else if (staffId === 5) {
        return factoryList;
    }
    return [];
};
