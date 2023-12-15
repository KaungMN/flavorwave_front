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
    CUSTOMER_HISTORY_ROUTE,
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
            { route: BUDGET_ROUTE, label: 'Budget' },
            { route: ADMIN_LOGIN_ROUTE, label: 'Admin Login' }
        ]
    },
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
    { route: MANUFACTURED_ROUTE, label: 'Manufactured', subMenu: [{ route: WAREHOUSE_ROUTE, label: 'Warehouse' }] },
    { route: SALES_ROUTE, label: 'Sales' }
];

const customerList = [
    {
        route: DEFAULT_ROUTE,
        label: 'Menubar',
        subMenu: [
            { route: CUSTOMER_ORDER_ROUTE, label: 'Order' },
            { route: CUSTOMER_ABOUTUS_ROUTE, label: 'About Us' }
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
            { route: BUDGET_ROUTE, label: 'Budget' },
            { route: ADMIN_LOGIN_ROUTE, label: 'Admin Login' }
        ]
    },
    {
        route: LOGISTIC_ROUTE,
        label: 'Logistic',
        subMenu: [
            { route: DELIVERY_ROUTE, label: 'Delivery' },
            { route: LOGISTIC_TRUCK_ROUTE, label: 'Truck' }
        ]
    },
    { route: RAW_ROUTE, label: 'Raw' },
    { route: MANUFACTURED_ROUTE, label: 'Manufactured', subMenu: [{ route: WAREHOUSE_ROUTE, label: 'Warehouse' }] },
    { route: SALES_ROUTE, label: 'Sales' }
];

export const getMenuList = () => {
    const authToken = getSessionStorage('authToken');
    const staffToken = getSessionStorage('staffToken');
    if (authToken) return customerList;
    if (staffToken) return staffList;
    return [];
};
