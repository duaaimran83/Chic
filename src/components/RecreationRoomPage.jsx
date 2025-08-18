import React from 'react';
import "./RecreationRoomPage.css";

const RecreationRoomPage = () => {
  const recreationItems = [
    {
      id: 1,
      name: "Gaming Chair",
      image: "prod1.jpg",
      description: "Ergonomic gaming chair with lumbar support and adjustable features for long gaming sessions",
      category: "Gaming"
    },
    {
      id: 2,
      name: "Pool Table",
      image: "prod2.jpg",
      description: "Professional pool table with felt surface and built-in storage for cues and accessories",
      category: "Entertainment"
    },
    {
      id: 3,
      name: "Home Theater Seating",
      image: "prod3.jpg",
      description: "Comfortable reclining chairs with cup holders for the ultimate movie experience",
      category: "Seating"
    },
    {
      id: 4,
      name: "Bar Stools",
      image: "prod1.jpg",
      description: "Stylish bar stools with padded seats for your home bar or entertainment area",
      category: "Seating"
    },
    {
      id: 5,
      name: "Entertainment Center",
      image: "prod2.jpg",
      description: "Large entertainment unit with space for TV, gaming consoles, and media storage",
      category: "Storage"
    },
    {
      id: 6,
      name: "Arcade Cabinet",
      image: "prod3.jpg",
      description: "Classic arcade cabinet with multiple games for endless entertainment",
      category: "Gaming"
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
    <div className="recreation-room-page">
      <div className="recreation-room-header">
        <h1>Recreation Room Collection</h1>
        <p>Create the ultimate entertainment space with our recreation room furniture</p>
      </div>
      <div className="recreation-room-container">
        {recreationItems.map(item => (
          <div className="recreation-room-item" key={item.id}>
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

export default RecreationRoomPage; 