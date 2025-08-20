import React from 'react';
import "./DiningRoomPage.css";

const DiningRoomPage = () => {
  const diningItems = [
    {
      id: 1,
      name: "Dining Table Set",
      image: "prod1.jpg",
      description: "Elegant dining table with 6 matching chairs, perfect for family gatherings",
      pid: "Dining Sets"
    },
    {
      id: 2,
      name: "Buffet Cabinet",
      image: "prod1.jpg",
      description: "Stylish buffet cabinet with storage for dining essentials and display space",
      pid: "Storage"
    },
    {
      id: 3,
      name: "China Cabinet",
      image: "prod2.jpg",
      description: "Traditional china cabinet with glass doors for displaying fine dinnerware",
      pid: "Storage"
    },
    {
      id: 4,
      name: "Tea Trolley",
      image: "prod3.jpg",
      description: "Mobile tea trolley with wheels for serving drinks and appetizers",
      pid: "Accessories"
    },
    {
      id: 5,
      name: "Dining Table Set",
      image: "Calisto-DR-DTS-103.jpg",
      description: "Elegant dining table with 4 matching chairs, perfect for family gatherings",
      pid: "DR-DTS-103"
    },
    {
      id: 6,
      name: "Dining Table Set",
      image: "Calisto-DR-DTS-101.jpg",
      description: "Elegant dining table with 8 matching chairs, perfect for family gatherings",
      pid: "DR-DTS-101"
    },
    {
      id: 7,
      name: "Dining Table Set",
      image: "Calisto-DR-DTS-102.jpg",
      description: "Elegant dining table with 4 matching chairs, perfect for family gatherings",
      pid: "DR-DTS-102"
    },
    {
      id: 8,
      name: "Dining Table Set",
      image: "Calisto-DR-DTS-104.jpg",
      description: "Elegant dining table with 8 matching chairs, perfect for family gatherings",
      pid: "DR-DTS-104"
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
              <span className="item-pid">{item.pid}</span>
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