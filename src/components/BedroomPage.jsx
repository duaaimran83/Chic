import React from 'react';
import "./BedroomPage.css";

const BedroomPage = () => {
  const bedroomItems = [
    {
      id: 1,
      name: "Master Bed Set",
      image: "prod1.jpg",
      description: "Luxurious master bedroom set with king-size bed, nightstands, and dresser",
      category: "Bedroom Sets"
    },
    {
      id: 2,
      name: "Queen Bed Frame",
      image: "prod2.jpg",
      description: "Elegant queen bed frame with upholstered headboard and footboard",
      category: "Beds"
    },
    {
      id: 3,
      name: "Bedside Tables",
      image: "prod3.jpg",
      description: "Modern bedside tables with storage drawers and elegant design",
      category: "Nightstands"
    },
    {
      id: 4,
      name: "Wardrobe Cabinet",
      image: "prod1.jpg",
      description: "Spacious wardrobe with hanging space and built-in drawers",
      category: "Storage"
    },
    {
      id: 5,
      name: "Dresser & Mirror",
      image: "prod2.jpg",
      description: "Classic dresser with matching mirror for complete bedroom storage",
      category: "Storage"
    },
    {
      id: 6,
      name: "Bedroom Bench",
      image: "prod3.jpg",
      description: "Comfortable bench for the foot of the bed with tufted upholstery",
      category: "Seating"
    },
    {
      id: 7,
      name: "Master Bed Set",
      image: "Calisto-BR-101.jpg",
      description: "Luxurious master bedroom set with king-size bed, nightstands, and dresser",
      category: "Bedroom Sets"
    },
    {
      id: 8,
      name: "Master Bed Set",
      image: "Calisto-BR-102.jpg",
      description: "Luxurious master bedroom set with king-size bed, nightstands, and dresser",
      category: "Bedroom Sets"
    },
    {
      id: 9,
      name: "Master Bed Set",
      image: "Calisto-BR-103.jpg",
      description: "Luxurious master bedroom set with king-size bed, nightstands, and dresser",
      category: "Bedroom Sets"
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
    <div className="bedroom-page">
      <div className="bedroom-header">
        <h1>Bedroom Collection</h1>
        <p>Transform your bedroom into a sanctuary of comfort and style</p>
      </div>
      <div className="bedroom-container">
        {bedroomItems.map(item => (
          <div className="bedroom-item" key={item.id}>
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

export default BedroomPage; 