// import React, { useState } from 'react';
// import Orderpopup from './Orderpopup';  // Make sure to import Orderpopup component

// function SweetItem({ sweet }) {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOrderClick = () => {
//     setShowPopup(true); // Open popup when "Order Now" button is clicked
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false); // Close popup when "Close" button is clicked
//   };

//   return (
//     <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
//       <img
//         src={sweet.image}
//         alt={sweet.name}
//         style={{
//           width: '100%',
//           height: '200px',
//           objectFit: 'cover',
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '20px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//         }}
//       >
//         <button
//           onClick={handleOrderClick}
//           style={{
//             padding: '10px 20px',
//             borderRadius: '25px',
//             background: 'var(--button-gradient)',
//             color: 'var(--text-light)',
//             fontSize: '16px',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//             boxShadow: '0 0 10px rgba(255, 193, 7, 0.8)',
//             transition: 'box-shadow 0.3s ease',
//             textTransform: 'uppercase',
//           }}
//           className="glowing-button"
//         >
//           Order Now
//         </button>
//       </div>

//       {/* Show Orderpopup if showPopup is true */}
//       {showPopup && <Orderpopup sweet={sweet} onClose={handleClosePopup} />}
//     </div>
//   );
// }

// export default SweetItem;




// import React, { useState } from 'react';

// function SweetItem({ sweet }) {
//   const [expanded, setExpanded] = useState(false); // Track expanded state for each item
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);

//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   const handleExpand = () => {
//     setExpanded(true); // Expand the item details when clicked
//   };

//   return (
//     <div
//       style={{
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         margin: '10px',
//         padding: '10px',
//         background: 'var(--card-bg)',
//         textAlign: 'center',
//         width: expanded ? '80%' : '250px', // Expanding width when clicked
//         transition: 'all 0.3s ease', // Smooth transition for expansion
//       }}
//     >
//       <img
//         src={sweet.image}
//         alt={sweet.name}
//         style={{
//           width: '100%',
//           borderRadius: '10px',
//           height: expanded ? '300px' : '150px', // Adjust image size for expanded view
//           objectFit: 'cover',
//         }}
//       />
//       <h3>{sweet.name}</h3>
//       <p>Price per kg: ₹{sweet.price}</p>

//       {/* Only show expanded content if item is expanded */}
//       {expanded && (
//         <>
//           <div>
//             <label htmlFor="quantity">Select Quantity (kg):</label>
//             <select
//               id="quantity"
//               value={quantity}
//               onChange={handleQuantityChange}
//               style={{
//                 padding: '8px',
//                 borderRadius: '8px',
//                 margin: '10px 0',
//                 width: '100%',
//                 background: 'var(--card-bg)',
//                 color: 'var(--text-light)',
//                 border: '1px solid var(--primary-gold)',
//               }}
//             >
//               {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//                 <option key={qty} value={qty}>
//                   {qty} kg
//                 </option>
//               ))}
//             </select>
//           </div>

//           <p>Total Price: ₹{price.toFixed(2)}</p>

//           <button
//             className="confirm-btn"
//             onClick={() => alert(`Order placed for ${quantity} kg of ${sweet.name} at ₹${price}`)}
//             style={{
//               marginTop: '10px',
//               padding: '10px 20px',
//               borderRadius: '8px',
//               background: 'var(--button-gradient)',
//               color: 'var(--text-light)',
//               fontWeight: 'bold',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Confirm Order
//           </button>
//         </>
//       )}

//       {!expanded && (
//         <button
//           className="order-now-btn"
//           onClick={handleExpand}
//           style={{
//             marginTop: '10px',
//             padding: '10px 20px',
//             borderRadius: '8px',
//             background: 'var(--primary-red)',
//             color: 'var(--text-light)',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Order Now
//         </button>
//       )}
//     </div>
//   );
// }

// export default SweetItem;







// import React, { useState } from 'react';

// function SweetItem({ sweet }) {
//   const [expanded, setExpanded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);

//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   const handleExpand = () => {
//     setExpanded(true);
//   };

//   const handleOrderConfirm = async () => {
//     const orderDetails = `Item: ${sweet.name}\nQuantity: ${quantity} kg\nTotal Price: ₹${price.toFixed(2)}`;
    
//     // Send order details to backend (Node.js server)
//     try {
//       const response = await fetch('http://localhost:5000/send-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ orderDetails }),
//       });

//       if (response.ok) {
//         alert('Order placed successfully. The owner has been notified.');
//       } else {
//         alert('Failed to place the order.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to send order details to owner.');
//     }
//   };

//   return (
//     <div
//       style={{
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         margin: '10px',
//         padding: '10px',
//         background: 'var(--card-bg)',
//         textAlign: 'center',
//         width: expanded ? '80%' : '250px',
//         transition: 'all 0.3s ease',
//       }}
//     >
//       <img
//         src={sweet.image}
//         alt={sweet.name}
//         style={{
//           width: '100%',
//           borderRadius: '10px',
//           height: expanded ? '300px' : '150px',
//           objectFit: 'cover',
//         }}
//       />
//       <h3>{sweet.name}</h3>
//       <p>Price per kg: ₹{sweet.price}</p>

//       {expanded && (
//         <>
//           <div>
//             <label htmlFor="quantity">Select Quantity (kg):</label>
//             <select
//               id="quantity"
//               value={quantity}
//               onChange={handleQuantityChange}
//               style={{
//                 padding: '8px',
//                 borderRadius: '8px',
//                 margin: '10px 0',
//                 width: '100%',
//                 background: 'var(--card-bg)',
//                 color: 'var(--text-light)',
//                 border: '1px solid var(--primary-gold)',
//               }}
//             >
//               {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//                 <option key={qty} value={qty}>
//                   {qty} kg
//                 </option>
//               ))}
//             </select>
//           </div>

//           <p>Total Price: ₹{price.toFixed(2)}</p>

//           <button
//             className="confirm-btn"
//             onClick={handleOrderConfirm}
//             style={{
//               marginTop: '10px',
//               padding: '10px 20px',
//               borderRadius: '8px',
//               background: 'var(--button-gradient)',
//               color: 'var(--text-light)',
//               fontWeight: 'bold',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Confirm Order
//           </button>
//         </>
//       )}

//       {!expanded && (
//         <button
//           className="order-now-btn"
//           onClick={handleExpand}
//           style={{
//             marginTop: '10px',
//             padding: '10px 20px',
//             borderRadius: '8px',
//             background: 'var(--primary-red)',
//             color: 'var(--text-light)',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Order Now
//         </button>
//       )}
//     </div>
//   );
// }

// export default SweetItem;





import React from 'react';

function SweetItem({ sweet, onOrderClick }) {
  return (
    <div className="sweet-item">
      <img src={sweet.image} alt={sweet.name} />
      <h3>{sweet.name}</h3>
      <p>Price: ₹{sweet.price} per kg</p>
      <button className="order-btn" onClick={() => onOrderClick(sweet)}>
        Order Now
      </button>
    </div>
  );
}

export default SweetItem;
