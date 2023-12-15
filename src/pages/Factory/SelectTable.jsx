// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   TextField,
//   Button,
// } from '@mui/material';

// const MultiSelectTable = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [items, setItems] = useState([
//     { id: 1, name: 'Item 1', quantity: 0 },
//     { id: 2, name: 'Item 2', quantity: 0 },
//     { id: 3, name: 'Item 3', quantity: 0 },
//     // Add more items as needed
//   ]);

//   const handleCheckboxChange = (event, item) => {
//     const selectedIndex = selectedItems.indexOf(item);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selectedItems, item);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selectedItems.slice(1));
//     } else if (selectedIndex === selectedItems.length - 1) {
//       newSelected = newSelected.concat(selectedItems.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selectedItems.slice(0, selectedIndex),
//         selectedItems.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedItems(newSelected);
//   };

//   const handleQuantityChange = (event, itemId) => {
//     const newItems = items.map(item =>
//       item.id === itemId ? { ...item, quantity: parseInt(event.target.value, 10) || 0 } : item
//     );
//     setItems(newItems);
//   };

//   const handleSubmit = () => {
//     // Handle submission of selected items
//     console.log('Selected Items:', selectedItems);
//   };

//   const isSelected = item => selectedItems.indexOf(item) !== -1;

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Quantity</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {items.map(item => (
//               <TableRow key={item.id}>
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     checked={isSelected(item)}
//                     onChange={event => handleCheckboxChange(event, item)}
//                   />
//                 </TableCell>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>
//                   <TextField
//                     type="number"
//                     value={item.quantity}
//                     onChange={event => handleQuantityChange(event, item.id)}
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Button variant="contained" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default MultiSelectTable;
