import React, { useEffect, useState } from 'react';
import "./Prices.css";
import pricesData from "../../../Data/Prices.json";

const Prices = () => {
  const [data, setData] = useState({ title: '', description: '', boxs: [] });

  useEffect(() => {
    setData(pricesData);
  }, []);

  return (
    <div className="prices">
      <div className="title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className="box-container">
        {data.boxs.map(box => (
          <div className="box" key={box.id}>
            <span>{box.title}</span>
            <h3>${box.price}</h3>
            <ul>
              {box.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={box.linkUrl}>{box.linkText} <i className={box.iconClass}></i></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;