import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import MenuData from "../../Data/MenuData.json";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="header">
      <div className="row-wrapper">

          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          {/* Menu */}
          <div className="menu">
            <ul>
            {MenuData.menu.map((item, index) => (
                <li 
                  key={index} 
                  onMouseEnter={() => handleMouseEnter(index)} 
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={item.link}>
                    {item.name}
                    {item.iconClass && <i className={item.iconClass}></i>}
                  </a>

                  {item.subMenu && activeMenu === index && (
                    <div className="dropdown">
                      <ul>
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.link}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>
          
          <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {MenuData.menu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    onClick={(e) => {
                      if (item.subMenu) {
                        e.preventDefault();
                        handleMenuClick(index);
                      }
                    }}
                  >
                    {item.name}
                    {item.iconClass && <i className={item.iconClass}></i>}
                  </a>
                  {item.subMenu && openMenu === index && (
                    <ul className="mobile-submenu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="social">
          <ul>
            {MenuData.social_media.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          </div>

      </div>
    </div>
  );
};

export default Header;
