import React from "react";
import "./DiningRoomPage.css";

const DiningRoomPage = () => {
  const diningItems = [
    {
      id: 1,
      name: "Dining Table Set",
      image: "prod1.jpg",
      description: "Elegant dining table with 6 matching chairs, perfect for family gatherings",
      category: "Dining Sets"
    },
    {
      id: 2,
      name: "Extendable Table",
      image: "prod2.jpg",
      description: "Versatile extendable dining table that seats 4-8 people comfortably",
      category: "Tables"
    },
    {
      id: 3,
      name: "Dining Chairs",
      image: "prod3.jpg",
      description: "Comfortable upholstered dining chairs with elegant design and padding",
      category: "Seating"
    },
    {
      id: 4,
      name: "Buffet Cabinet",
      image: "prod1.jpg",
      description: "Stylish buffet cabinet with storage for dining essentials and display space",
      category: "Storage"
    },
    {
      id: 5,
      name: "China Cabinet",
      image: "prod2.jpg",
      description: "Traditional china cabinet with glass doors for displaying fine dinnerware",
      category: "Storage"
    },
    {
      id: 6,
      name: "Bar Cart",
      image: "prod3.jpg",
      description: "Mobile bar cart with wheels for serving drinks and appetizers",
      category: "Accessories"
    }
  ];

  const imagePath = (imageName) => {
    try {
      return require(`../assets/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="dining-room-page">
      <div className="dining-room-header">
        <h1>Dining Room Collection</h1>
        <p>Create memorable dining experiences with our sophisticated dining room furniture</p>
      </div>
      <div className="dining-room-container">
        {diningItems.map(item => (
          <div className="dining-room-item" key={item.id}>
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

export default DiningRoomPage; 