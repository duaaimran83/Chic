import React from 'react';
import "./Highlight.css"
import HighlightData from "../../../Data/Highlight.json";

const Highlight = () => {

  const imagePath = (imageName) => {
    try {
      return require(`../../../assets/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="container">
      {HighlightData.map((highlight, index) => (
        <div key={index} className="row-wrapper">
            <div className="image">
              <img src={imagePath(highlight.imageSrc)} alt={highlight.title} />
            </div>
            <div className="content">
              <h3>{highlight.title}</h3>
                <h4>Size: <span>{highlight.size}</span></h4>
                <h4>Colors: <span>{highlight.colors}</span></h4>
                <h4>Designer: <span>{highlight.designer}</span></h4>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Highlight;
