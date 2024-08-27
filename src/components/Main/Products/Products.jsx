import React, { useEffect, useState } from 'react';
import "./Products.css"
import productsData from '../../../Data/Products.json'; 

const imagePath = (imageName) => {
  try {
    return require(`../../../assets/${imageName}`);
  } catch (err) {
    return null;
  }
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="products">
      <div className="box-container">
        {products.map(product => (
          <div className="box" key={product.id}>
            <a href={product.link} key={product.id} className="product-link" target="_blank" rel="noopener noreferrer">
                <div className="image">
                    <img src={imagePath(product.image)} alt={product.name} />
                    <div className="overlay">
                        <div className="text">Read More</div>
                    </div>
                </div>
            </a>
            <div className="content">
              <h4>{product.name}</h4>
              <h5>${product.price.toFixed(2)}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
