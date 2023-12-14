import { axios } from './api';
import productData from '../../__mock__/res/product.json';

const getProducts = async () => {
    const res = await axios.get('product');
    console.log(res.data);
    // TODO: need to Fix
    // return res.data;
    return productData;
};

export { getProducts };
