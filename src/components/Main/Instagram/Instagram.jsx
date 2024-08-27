import React from "react";
import "./Instagram.css";
import InstaData from "../../../Data/Instagram.json";

const imagePath = (imageName) => {
    try {
      return require(`../../../assets/${imageName}`);
    } catch (err) {
      return null;
    }
  };

const Instagram = () => {
  return (
    <div className="instagram">
        <div className="box-container">
            {InstaData.boxes.map((box, index) => (
                <div className="box" key={index}>
                    <a href={box.link} className="product-link" target="_blank">
                        <div className="image">
                            <img src={imagePath(box.image)} alt=""></img>
                            <div className="overlay">
                                <i className={box.iconClass}></i>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Instagram;
