import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-symbol">
          <img src="./logo.svg" alt="Logo" />
        </div>
      </div>

      <nav className="nav">
        <a href="#">Главная</a>
        <span className="divider"></span>
        <a href="#">Музыка</a>
        <span className="divider"></span>
        <a href="#">Сообщества</a>
        <span className="divider"></span>
        <a href="#">Друзья</a>
      </nav>
    </header>
  );
}

export default Header;
