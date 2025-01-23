// import React, { useState } from 'react';

// function Orderpopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseFloat(e.target.value);
//     setQuantity(newQuantity);
//     setPrice(newQuantity * sweet.price);
//   };

//   const handlePlaceOrder = () => {
//     const confirmation = window.confirm(
//       `Are you sure you want to order ${quantity}kg of ${sweet.name} for ₹${price}?`
//     );
//     if (confirmation) {
//       sendOrderDetails();
//     }
//   };

//   const sendOrderDetails = () => {
//     const message = `Order Details:\nItem: ${sweet.name}\nQuantity: ${quantity}kg\nPrice: ₹${price}`;
//     alert(`Order sent to owner:\n\n${message}`);
//     onClose();
//   };

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: '0',
//         left: '0',
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 1000,
//         animation: 'fadeIn 0.5s ease',  // Added smooth fade-in effect for popup
//       }}
//     >
//       <div
//         style={{
//           background: 'var(--card-bg)',
//           color: 'var(--text-light)',
//           padding: '20px',
//           borderRadius: '10px',
//           width: '400px',
//           textAlign: 'center',
//           boxShadow: '0 5px 15px rgba(0, 0, 0, 0.9)',
//           animation: 'fadeIn 0.5s ease', // Smooth fade-in effect for the content
//         }}
//       >
//         <img
//           src={sweet.image}
//           alt={sweet.name}
//           style={{
//             width: '100%',
//             height: '200px',
//             objectFit: 'cover',
//             borderRadius: '10px',
//             marginBottom: '15px',
//           }}
//         />
//         <h3>{sweet.name}</h3>
//         <p>
//           Price per kg: <span>₹{sweet.price}</span>
//         </p>
//         <label>
//           Select Quantity (kg):
//           <select
//             value={quantity}
//             onChange={handleQuantityChange}
//             style={{
//               padding: '8px',
//               borderRadius: '8px',
//               margin: '10px 0',
//               width: '100%',
//               background: 'var(--card-bg)',
//               color: 'var(--text-light)',
//               border: '1px solid var(--primary-gold)',
//             }}
//           >
//             {[0.25, 0.5, 0.75, 1, 1.25, 1.5].map((value) => (
//               <option key={value} value={value}>
//                 {value} kg
//               </option>
//             ))}
//           </select>
//         </label>
//         <p>
//           Total Price: <span>₹{price}</span>
//         </p>
//         <button
//           style={{
//             margin: '10px',
//             padding: '10px 20px',
//             borderRadius: '8px',
//             background: 'var(--button-gradient)',
//             color: 'var(--text-light)',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//           onClick={handlePlaceOrder}
//         >
//           Place Order
//         </button>
//         <button
//           style={{
//             margin: '10px',
//             padding: '10px 20px',
//             borderRadius: '8px',
//             background: 'var(--primary-red)',
//             color: 'var(--text-light)',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Orderpopup;






// import React, { useState } from 'react';
// import '../App.css';

// function OrderPopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);

//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   const handleOrderConfirm = () => {
//     const confirmOrder = window.confirm('Are you sure you want to place this order?');
//     if (confirmOrder) {
//       // Mock sending the order via SMS or API
//       alert(`Order placed for ${quantity} kg of ${sweet.name} at ₹${price}`);
//       onClose();
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <img src={sweet.image} alt={sweet.name} className="popup-image" />
//         <h3>{sweet.name}</h3>
//         <p>Price per kg: ₹{sweet.price}</p>
//         <div>
//           <label htmlFor="quantity">Select Quantity:</label>
//           <select id="quantity" value={quantity} onChange={handleQuantityChange}>
//             {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//               <option key={qty} value={qty}>
//                 {qty} kg
//               </option>
//             ))}
//           </select>
//         </div>
//         <p>Total Price: ₹{price.toFixed(2)}</p>
//         <button className="confirm-btn" onClick={handleOrderConfirm}>
//           Confirm Order
//         </button>
//         <button className="close-btn" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OrderPopup;











// import React, { useState } from 'react';
// import '../Animations.css'; // Make sure to import the animations CSS
// import '../App.css';

// function OrderPopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [status, setStatus] = useState('');

//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   const handleSubmit = async () => {
//     if (!name || !phone) {
//       alert('Please fill in all fields');
//       return;
//     }

//     // Assuming you want to send data to the backend for email notification
//     const orderDetails = {
//       name: name,
//       phone: phone,
//       sweet: sweet.name,
//       quantity: quantity,
//       price: price,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/send-order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ orderDetails }),
//       });

//       if (response.ok) {
//         setStatus('Order sent to owner successfully!');
//       } else {
//         setStatus('Failed to send the order to owner.');
//       }
//     } catch (error) {
//       setStatus('Error occurred while sending the order.');
//     }
//   };

//   return (
//     <div
//       className="popup-overlay"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 1000,
//         animation: 'fadeIn 0.5s ease', // fade-in effect for the popup
//       }}
//     >
//       <div
//         className="popup-content"
//         style={{
//           background: 'var(--card-bg)',
//           color: 'var(--text-light)',
//           padding: '20px',
//           borderRadius: '10px',
//           width: '400px',
//           textAlign: 'center',
//           boxShadow: '0 5px 15px rgba(0, 0, 0, 0.9)',
//         }}
//       >
//         <img
//           src={sweet.image}
//           alt={sweet.name}
//           style={{ width: '100%', borderRadius: '10px' }}
//         />
//         <h3>{sweet.name}</h3>
//         <p>Price per kg: ₹{sweet.price}</p>

//         <div>
//           <label htmlFor="quantity">Select Quantity (kg):</label>
//           <select id="quantity" value={quantity} onChange={handleQuantityChange}>
//             {[0.25, 0.5, 0.75, 1, 1.25, 1.5].map((qty) => (
//               <option key={qty} value={qty}>
//                 {qty} kg
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="name">Your Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             style={{ padding: '5px', borderRadius: '8px', width: '100%' }}
//           />
//         </div>

//         <div>
//           <label htmlFor="phone">Phone Number:</label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Enter your phone number"
//             style={{ padding: '5px', borderRadius: '8px', width: '100%' }}
//           />
//         </div>

//         <p>Total Price: ₹{price.toFixed(2)}</p>

//         {status && <p>{status}</p>}

//         <button
//           className="confirm-btn"
//           onClick={handleSubmit}
//           style={{
//             margin: '10px',
//             padding: '10px 20px',
//             borderRadius: '8px',
//             background: 'var(--button-gradient)',
//             color: 'var(--text-light)',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Confirm Order
//         </button>

//         <button
//           className="close-btn"
//           onClick={onClose}
//           style={{
//             margin: '10px',
//             padding: '10px 20px',
//             borderRadius: '8px',
//             background: 'var(--primary-red)',
//             color: 'var(--text-light)',
//             fontWeight: 'bold',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OrderPopup;











// import React, { useState } from 'react';
// import './App.css'; // Assuming your styles are in this file

// function OrderPopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderStatus, setOrderStatus] = useState('');
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

//   // Handle quantity change
//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   // Handle order confirmation
//   const handleConfirmOrder = () => {
//     const orderDetails = `Name: ${name}\nPhone: ${phone}\nOrder: ${sweet.name}\nQuantity: ${quantity}kg\nPrice: ₹${price.toFixed(2)}`;
    
//     // Simulate sending email to owner (use an API call here in real scenario)
//     // After confirmation, show status message
//     setIsOrderConfirmed(true);
//     setOrderStatus('Order successfully sent to owner!');
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         {/* Display Item Details */}
//         {!isOrderConfirmed ? (
//           <>
//             <img src={sweet.image} alt={sweet.name} className="popup-image" />
//             <h3>{sweet.name}</h3>
//             <p>Price per kg: ₹{sweet.price}</p>

//             {/* Quantity Selection */}
//             <div>
//               <label>Select Quantity (kg):</label>
//               <select value={quantity} onChange={handleQuantityChange}>
//                 {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//                   <option key={qty} value={qty}>
//                     {qty} kg
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <p>Total Price: ₹{price.toFixed(2)}</p>

//             {/* Customer Details Form */}
//             <div>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label>Phone Number:</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             <button className="confirm-btn" onClick={handleConfirmOrder}>
//               Confirm Order
//             </button>
//           </>
//         ) : (
//           // Display Order Status and Close Button after confirmation
//           <>
//             <h3>Thank you for your order!</h3>
//             <p>Your order for {sweet.name} has been successfully placed.</p>
//             <p>Status: {orderStatus}</p>
//             <button className="close-btn" onClick={onClose}>
//               Close
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderPopup;









// import React, { useState } from 'react';
// import '.src/App.css';

// function OrderPopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderStatus, setOrderStatus] = useState('');
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

//   // Handle quantity change
//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   // Handle order confirmation
//   const handleConfirmOrder = () => {
//     const orderDetails = `Name: ${name}\nPhone: ${phone}\nOrder: ${sweet.name}\nQuantity: ${quantity}kg\nPrice: ₹${price.toFixed(2)}`;
    
//     // Simulate sending email to owner (use an API call here in real scenario)
//     // After confirmation, show status message
//     setIsOrderConfirmed(true);
//     setOrderStatus('Order successfully sent to owner!');
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         {/* Display Item Details */}
//         {!isOrderConfirmed ? (
//           <>
//             <img src={sweet.image} alt={sweet.name} className="popup-image" />
//             <h3>{sweet.name}</h3>
//             <p>Price per kg: ₹{sweet.price}</p>

//             {/* Quantity Selection */}
//             <div>
//               <label>Select Quantity (kg):</label>
//               <select value={quantity} onChange={handleQuantityChange}>
//                 {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//                   <option key={qty} value={qty}>
//                     {qty} kg
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <p>Total Price: ₹{price.toFixed(2)}</p>

//             {/* Customer Details Form */}
//             <div>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label>Phone Number:</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             <button className="confirm-btn" onClick={handleConfirmOrder}>
//               Confirm Order
//             </button>
//           </>
//         ) : (
//           // Display Order Status and Close Button after confirmation
//           <>
//             <h3>Thank you for your order!</h3>
//             <p>Your order for {sweet.name} has been successfully placed.</p>
//             <p>Status: {orderStatus}</p>
//             <button className="close-btn" onClick={onClose}>
//               Close
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderPopup;













// import React, { useState } from 'react';
// import '../App.css'; // Corrected the path to App.css

// function OrderPopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderStatus, setOrderStatus] = useState('');
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   const handleConfirmOrder = () => {
//     const orderDetails = `Name: ${name}\nPhone: ${phone}\nOrder: ${sweet.name}\nQuantity: ${quantity}kg\nPrice: ₹${price.toFixed(2)}`;
    
//     if (name.trim() && phone.trim()) {
//       console.log('Order Details:', orderDetails); // Log the order details to use the variable

//       // Simulate sending the order (replace with API call in a real project)
//       // For example: sendOrderToAPI(orderDetails);

//       setIsOrderConfirmed(true);
//       setOrderStatus('Order successfully sent to owner!');
//     } else {
//       alert('Please fill out all the details before confirming the order.');
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         {!isOrderConfirmed ? (
//           <>
//             <h3>{sweet.name}</h3>
//             <p>Price per kg: ₹{sweet.price}</p>
//             <div>
//               <label>Select Quantity (kg):</label>
//               <select value={quantity} onChange={handleQuantityChange}>
//                 {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//                   <option key={qty} value={qty}>
//                     {qty} kg
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <p>Total Price: ₹{price.toFixed(2)}</p>
//             <div>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label>Phone Number:</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//               />
//             </div>
//             <button className="confirm-btn" onClick={handleConfirmOrder}>
//               Confirm Order
//             </button>
//           </>
//         ) : (
//           <>
//             <h3>Thank you for your order!</h3>
//             <p>Your order for {sweet.name} has been successfully placed.</p>
//             <p>Status: {orderStatus}</p>
//             <button className="close-btn" onClick={onClose}>
//               Close
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderPopup;











// import React, { useState } from 'react';
// import '../App.css'; // Ensure the correct path to your App.css

// function OrderPopup({ sweet, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(sweet.price);
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderStatus, setOrderStatus] = useState('');
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

//   const handleQuantityChange = (e) => {
//     const qty = parseFloat(e.target.value);
//     setQuantity(qty);
//     setPrice(qty * sweet.price);
//   };

//   const handleConfirmOrder = () => {
//     const orderDetails = `Name: ${name}\nPhone: ${phone}\nOrder: ${sweet.name}\nQuantity: ${quantity}kg\nPrice: ₹${price.toFixed(2)}`;
    
//     if (name.trim() && phone.trim()) {
//       console.log('Order Details:', orderDetails); // Log the order details to simulate sending the order

//       // Simulate sending the order (replace with API call in a real project)
//       // Example: sendOrderToAPI(orderDetails);

//       setIsOrderConfirmed(true);
//       setOrderStatus('Order successfully sent to owner!');
//     } else {
//       alert('Please fill out all the details before confirming the order.');
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         {!isOrderConfirmed ? (
//           <>
//             {/* Item Details */}
//             <img src={sweet.image} alt={sweet.name} className="popup-image" />
//             <h3>{sweet.name}</h3>
//             <p>Price per kg: ₹{sweet.price}</p>

//             {/* Quantity Selection */}
//             <div>
//               <label>Select Quantity (kg):</label>
//               <select value={quantity} onChange={handleQuantityChange}>
//                 {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
//                   <option key={qty} value={qty}>
//                     {qty} kg
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Total Price */}
//             <p>Total Price: ₹{price.toFixed(2)}</p>

//             {/* Customer Details */}
//             <div>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label>Phone Number:</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             {/* Buttons */}
//             <button className="confirm-btn" onClick={handleConfirmOrder}>
//               Confirm Order
//             </button>
//             <button className="close-btn" onClick={onClose}>
//               Close
//             </button>
//           </>
//         ) : (
//           <>
//             {/* Order Confirmation */}
//             <h3>Thank you for your order!</h3>
//             <p>Your order for {sweet.name} has been successfully placed.</p>
//             <p>Status: {orderStatus}</p>
//             <button className="close-btn" onClick={onClose}>
//               Close
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderPopup;

















import React, { useState } from 'react';
import '../App.css'; // Ensure correct path to your App.css

function OrderPopup({ sweet, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(sweet.price);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const ownerPhone = '+916303542611'; // Replace with the real owner's phone number (with country code)

  const handleQuantityChange = (e) => {
    const qty = parseFloat(e.target.value);
    setQuantity(qty);
    setPrice(qty * sweet.price);
  };

  const handleConfirmOrder = () => {
    if (name.trim() && phone.trim()) {
      const message = `Order Details:\nName: ${name}\nPhone: ${phone}\nSweet: ${sweet.name}\nQuantity: ${quantity}kg\nTotal Price: ₹${price.toFixed(2)}`;
      const smsLink = `sms:${ownerPhone}?body=${encodeURIComponent(message)}`;
      
      // Redirect to the SMS app with the pre-filled message
      window.location.href = smsLink;

      setIsOrderConfirmed(true);
      setOrderStatus('Order successfully sent to owner!');
    } else {
      alert('Please fill out all the details before confirming the order.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {!isOrderConfirmed ? (
          <>
            {/* Item Details */}
            <img src={sweet.image} alt={sweet.name} className="popup-image" />
            <h3>{sweet.name}</h3>
            <p>Price per kg: ₹{sweet.price}</p>

            {/* Quantity Selection */}
            <div>
              <label>Select Quantity (kg):</label>
              <select value={quantity} onChange={handleQuantityChange}>
                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty} kg
                  </option>
                ))}
              </select>
            </div>

            {/* Total Price */}
            <p>Total Price: ₹{price.toFixed(2)}</p>

            {/* Customer Details */}
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Buttons */}
            <button className="confirm-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </>
        ) : (
          <>
            {/* Order Confirmation */}
            <h3>Thank you for your order!</h3>
            <p>Your order for {sweet.name} has been successfully placed.</p>
            <p>Status: {orderStatus}</p>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderPopup;
