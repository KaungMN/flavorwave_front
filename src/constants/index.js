import {
    DEFAULT_ROUTE,
    RAW_ROUTE,
    MANUFACTURED_ROUTE,
    ADMIN_ROUTE,
    PRODUCT_ROUTE,
    STAFF_ROUTE,
    BUDGET_ROUTE,
    LOGISTIC_ROUTE,
    DELIVERY_ROUTE,
    CUSTOMER_ROUTE,
    CUSTOMER_LOGIN_ROUTE,
    CUSTOMER_SIGN_UP_ROUTE,
    CUSTOMER_ORDER_ROUTE,
    CUSTOMER_HISTORY_ROUTE,
    WAREHOUSE_ROUTE,
    SALES_ROUTE
} from './routes';

export const menuList = [
    {
        route: ADMIN_ROUTE,
        label: 'Admin',
        subMenu: [
            { route: STAFF_ROUTE, label: 'Staff' },
            { route: PRODUCT_ROUTE, label: 'Product' },
            { route: BUDGET_ROUTE, label: 'Budget' }
        ]
    },
    { route: LOGISTIC_ROUTE, label: 'Logistic', subMenu: [{ route: DELIVERY_ROUTE, label: 'Delivery' }] },
    {
        route: CUSTOMER_ROUTE,
        label: 'Customer',
        subMenu: [
            { route: CUSTOMER_LOGIN_ROUTE, label: 'Login' },
            { route: CUSTOMER_SIGN_UP_ROUTE, label: 'SignUp' },
            { route: CUSTOMER_ORDER_ROUTE, label: 'Order' }
        ]
    },
    { route: RAW_ROUTE, label: 'Raw' },
    { route: MANUFACTURED_ROUTE, label: 'Manufactured', subMenu: [{ route: WAREHOUSE_ROUTE, label: 'Warehouse' }] },
    { route: SALES_ROUTE, label: 'Sales' }
];
