import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import '../header/Header.css';

import HeaderMenu from './_components/HeaderMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="headerNav">
          <h1>
            <Link to="/">로고</Link>
          </h1>
          <div className="menuCon">
            <Link to="/">MAIN</Link>
            <Link to="/community">커뮤니티</Link>
            <Link to="/selftest">자가테스트</Link>
          </div>
        </nav>
        <div className="headerEtcCon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-bell"></i>
          <Link to="/mypage">
            <i className="fa-regular fa-user"></i>
          </Link>
          <i
            className={`fa-solid ${isMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            onClick={handleMenu}
          ></i>
        </div>
        {isMenuOpen && <HeaderMenu />}
      </header>
      <Outlet />
    </>
  );
}
