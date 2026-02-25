import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon"></div>
        <span className="logo-text">МЕСК</span>
      </div>

      <nav className="nav">
        <a href="#">Главная</a>
        <a href="#">Музыка</a>
        <a href="#">Сообщества</a>
        <a href="#">Друзья</a>
      </nav>
    </header>
  );
}

export default Header;
