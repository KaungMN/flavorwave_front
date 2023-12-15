import Edit from '../EditProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TableRow({ item, id }) {
    let staffId = JSON.parse(sessionStorage.getItem('staffId'));
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState([]);

    async function getProducts() {
        const res = await axios.get('http://localhost:8000/api/get-products');
        const datas = res.data;
        setProducts(datas);
        let result = products?.filter((i) => {
            return i.id === parseInt(item.product_id);
        });
        setCurrentProduct(result);
    }

    useEffect(() => {
        getProducts();
    }, []);
    console.log(currentProduct);

    return (
        <tr key={id}>
            <td>{id + 1}</td>
            {currentProduct.map((p) => (
                <td>{p.name}</td>
            ))}

            <td>
                <ol>
                    {currentProduct.map((p) =>
                        p.raw.map((r) => (
                            <>
                                <li key={r.name1}>{r.name1}</li>
                                <li key={r.name2}>{r.name2}</li>
                                <li key={r.name3}>{r.name3}</li>
                                <li key={r.name4}>{r.name4}</li>
                            </>
                        ))
                    )}
                </ol>
            </td>
            <td>{item.product_price}</td>
            <td>{item.total_quantity}</td>
            <td>{item.release_date}</td>
            {staffId >= 2 ? (
                <td>
                    <Edit initialData={item} />
                </td>
            ) : null}
        </tr>
    );
}