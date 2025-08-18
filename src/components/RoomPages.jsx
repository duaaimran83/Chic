import React from 'react';
import "./RoomPages.css";

const RoomPages = () => {
  const rooms = [
    {
      id: 1,
      name: "Bedroom",
      image: "prod1.jpg",
      description: "Elegant bedroom furniture sets designed for comfort and style",
      link: "/bedroom"
    },
    {
      id: 2,
      name: "Dining Room",
      image: "prod2.jpg", 
      description: "Sophisticated dining room collections for memorable gatherings",
      link: "/dining-room"
    },
    {
      id: 3,
      name: "Living Room",
      image: "prod3.jpg",
      description: "Contemporary living room pieces for modern homes",
      link: "/living-room"
    },
    {
      id: 4,
      name: "Recreation Room",
      image: "prod1.jpg",
      description: "Comfortable recreation furniture for entertainment spaces",
      link: "/recreation-room"
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
    <div className="room-pages">
      <div className="room-title">
        <h2>Our Room Collections</h2>
        <p>Discover our curated furniture collections for every room in your home</p>
      </div>
      <div className="room-container">
        {rooms.map(room => (
          <div className="room-box" key={room.id}>
            <a href={room.link} className="room-link">
              <div className="room-image">
                <img src={imagePath(room.image)} alt={room.name} />
                <div className="room-overlay">
                  <div className="room-text">View Collection</div>
                </div>
              </div>
            </a>
            <div className="room-content">
              <h4>{room.name}</h4>
              <p>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomPages; 