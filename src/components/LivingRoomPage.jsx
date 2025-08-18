import React from 'react';
import "./LivingRoomPage.css";

const LivingRoomPage = () => {
  const livingRoomItems = [
    {
      id: 1,
      name: "Sofa Set",
      image: "prod1.jpg",
      description: "Comfortable 3-seater sofa with matching armchairs for the perfect living room setup",
      category: "Seating"
    },
    {
      id: 2,
      name: "Coffee Table",
      image: "prod2.jpg",
      description: "Elegant coffee table with storage drawer, perfect for books and magazines",
      category: "Tables"
    },
    {
      id: 3,
      name: "TV Unit",
      image: "prod3.jpg",
      description: "Modern TV unit with cable management and additional storage compartments",
      category: "Entertainment"
    },
    {
      id: 4,
      name: "Side Tables",
      image: "prod1.jpg",
      description: "Matching side tables with elegant design to complement your sofa",
      category: "Tables"
    },
    {
      id: 5,
      name: "Bookshelf",
      image: "prod2.jpg",
      description: "Stylish bookshelf with adjustable shelves for books and decorative items",
      category: "Storage"
    },
    {
      id: 6,
      name: "Floor Lamp",
      image: "prod3.jpg",
      description: "Contemporary floor lamp with adjustable head for perfect ambient lighting",
      category: "Lighting"
    },
    {
      id: 7,
      name: "Side Tables",
      image: "Calisto-LR-ST-103.jpg",
      description: "Matching side tables with elegant design to complement your sofa",
      category: "Tables"
    },
    {
      id: 8,
      name: "Side Tables",
      image: "Calisto-LR-ST-104.jpg",
      description: "Matching side tables with elegant design to complement your sofa",
      category: "Tables"
    },
    {
      id: 9,
      name: "Side Tables",
      image: "Calisto-LR-ST-105.jpg",
      description: "Matching side tables with elegant design to complement your sofa",
      category: "Tables"
    },
    {
      id: 10,
      name: "Side Tables",
      image: "Calisto-LR-ST-106.jpg",
      description: "Matching side tables with elegant design to complement your sofa",
      category: "Tables"
    },
  ];

  const imagePath = (imageName) => {
    try {
      return require(`../assets/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="living-room-page">
      <div className="living-room-header">
        <h1>Living Room Collection</h1>
        <p>Transform your living space with our contemporary and comfortable living room furniture</p>
      </div>
      <div className="living-room-container">
        {livingRoomItems.map(item => (
          <div className="living-room-item" key={item.id}>
            <div className="item-image">
              <img src={imagePath(item.image)} alt={item.name} />
              {/* Uncomment the following lines if you want to add an overlay effect 
              <div className="item-overlay">
                <div className="item-text">View Details</div>
              </div>
              */}
            </div>
            <div className="item-content">
              <span className="item-category">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingRoomPage; 