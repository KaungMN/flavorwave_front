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
} from '../constants/routes';

export const menuList = [
    { route: ADMIN_ROUTE, label: 'Admin' },
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
    { route: FACTORY_ROUTE, label: 'Factory' },
    { route: WAREHOUSE_ROUTE, label: 'Warehouse' },
    { route: SALES_ROUTE, label: 'Sales' }
];
