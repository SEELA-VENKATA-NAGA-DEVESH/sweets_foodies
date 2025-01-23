// import React from 'react';
// import SweetItem from './SweetItem';

// const sweets = [
//   { id: 1, name: 'Gulab Jamun', price: 50, image: '/assets/gulab_jamun.jpg' },
//   { id: 2, name: 'Rasgulla', price: 40, image: '/assets/rasgulla.jpg' },
//   { id: 3, name: 'Jalebi', price: 60, image: '/assets/jalebi.jpg' },
//   { id: 4, name: 'Laddu', price: 30, image: '/assets/laddu.jpg' },
// ];

// function Menu() {
//   return (
//     <div className="menu">
//       {sweets.map((sweet) => (
//         <SweetItem key={sweet.id} sweet={sweet} />
//       ))}
//     </div>
//   );
// }

// export default Menu;



import React, { useState } from 'react';
import SweetItem from './SweetItem';
import OrderPopup from './Orderpopup';

// Import images
import GheeAriseluorAttaraseluImg from '../assets/Ghee Ariselu (or) Attaraselu.jpg';
import AriseluorAttaraseluImg from '../assets/Ariselu (or) Attaraselu.jpg';
import jalebiImg from '../assets/jalebi.jpg';
import ladduImg from '../assets/laddu.jpg';

const sweets = [
  { id: 1, name: 'Ghee Ariselu (or) Attaraselu', price: 400, image: GheeAriseluorAttaraseluImg },
  { id: 2, name: 'Ariselu (or) Attaraselu', price: 300, image: AriseluorAttaraseluImg },
  { id: 3, name: 'Jalebi', price: 100, image: jalebiImg },
  { id: 4, name: 'Laddu', price: 200, image: ladduImg },
];

function Menu() {
  const [selectedSweet, setSelectedSweet] = useState(null);

  const handleOrderClick = (sweet) => {
    setSelectedSweet(sweet);
  };

  const handleClosePopup = () => {
    setSelectedSweet(null);
  };

  return (
    <div className="menu">
      {sweets.map((sweet) => (
        <SweetItem key={sweet.id} sweet={sweet} onOrderClick={handleOrderClick} />
      ))}
      {selectedSweet && (
        <OrderPopup sweet={selectedSweet} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Menu;








// import React, { useState } from 'react';
// import SweetItem from './SweetItem';
// import OrderPopup from './Orderpopup';

// const sweets = [
//   { id: 1, name: 'Gulab Jamun', price: 50, image: './assets/gulab_jamun.jpg' },
//   { id: 2, name: 'Rasgulla', price: 40, image: './assets/rasgulla.jpg' },
//   { id: 3, name: 'Jalebi', price: 60, image: './assets/jalebi.jpg' },
//   { id: 4, name: 'Laddu', price: 30, image: './assets/laddu.jpg' },
// ];

// function Menu() {
//   const [selectedSweet, setSelectedSweet] = useState(null);

//   const handleOrderClick = (sweet) => {
//     setSelectedSweet(sweet);
//   };

//   const handleClosePopup = () => {
//     setSelectedSweet(null);
//   };

//   return (
//     <div className="menu">
//       {sweets.map((sweet) => (
//         <SweetItem key={sweet.id} sweet={sweet} onOrderClick={handleOrderClick} />
//       ))}
//       {selectedSweet && (
//         <OrderPopup sweet={selectedSweet} onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// }

// export default Menu;
