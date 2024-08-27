import React, { useEffect, useState } from 'react';
import "./Footer.css";
import footerData from "../../Data/Footer.json";

const Footer = () => {
  const [boxs, setBoxs] = useState([]);

  useEffect(() => {
    setBoxs(footerData.boxs);
  }, []);

  return (
    <div className="footer">
          <div className="box-container">
            {boxs.map((box, index) => (
              <div className="box" key={index}>
                <h4>{box.title}</h4>
                {box.type === "text" ? (
                  box.content.map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                  ))
                ) : (
                  <ul>
                    {box.content.map((item, itemIndex) => (
                      box.type === "links" ? (
                        <li key={itemIndex}>
                          <a href={item.url}>{item.name}</a>
                        </li>
                      ) : (
                        <li key={itemIndex}>{item}</li>
                      )
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
    </div>
  );
};

export default Footer;
