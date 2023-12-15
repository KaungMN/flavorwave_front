import TableComponent from "../../components/admin/staff/table/Table";
import Container from "react-bootstrap/Container";
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const order = [
//     {
//         orderItem: 'Product A',
//         orderQuantity: 5,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product B',
//         orderQuantity: 10,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product C',
//         orderQuantity: 8,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product D',
//         orderQuantity: 15,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product E',
//         orderQuantity: 3,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product F',
//         orderQuantity: 7,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product G',
//         orderQuantity: 12,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product H',
//         orderQuantity: 4,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product I',
//         orderQuantity: 6,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product J',
//         orderQuantity: 9,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product K',
//         orderQuantity: 11,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product L',
//         orderQuantity: 13,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product M',
//         orderQuantity: 2,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product N',
//         orderQuantity: 14,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product O',
//         orderQuantity: 20,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product P',
//         orderQuantity: 18,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product Q',
//         orderQuantity: 16,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product R',
//         orderQuantity: 1,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product S',
//         orderQuantity: 17,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     },
//     {
//         orderItem: 'Product T',
//         orderQuantity: 19,
//         salesPermit: 'approved',
//         sales: 'app',
//         Permit: 'roved'
//     }
// ];

function Staff() {
    const [data, setData] = useState(null);

       async function getStaffs() {
           const res = await axios.get('http://localhost:8000/api/staffs');
           const datas = res.data;
           console.log(datas);
           setData(datas);
       }

       useEffect(() => {
           getStaffs();
       }, [data?.length]);
       
  return (
      <Container>
          {data ? (
              <TableComponent data={data} />
          ) : (
              <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>
          )}
      </Container>
  );
}

export default Staff;
