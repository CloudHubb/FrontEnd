import { Link, Outlet, useLocation } from 'react-router-dom'; // useLocation 추가
import { useEffect, useState } from 'react';

import '../header/Header.css';

import HeaderMenu from './_components/HeaderMenu';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  // 메뉴 클릭해서 다른 페이지로 이동 시, 메뉴 자동으로 닫힐 수 있도록 함
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header>
        <nav className="headerNav">
          <h1>
            <Link to="/home">로고</Link>
          </h1>
          <div className="menuCon">
            <Link to="/home" className={isActive('/home') ? 'activeLink' : ''}>
              MAIN
            </Link>
            <Link
              to="/community"
              className={isActive('/community') ? 'activeLink' : ''}
            >
              커뮤니티
            </Link>
            <Link
              to="/selftest"
              className={isActive('/selftest') ? 'activeLink' : ''}
            >
              자가테스트
            </Link>
          </div>
        </nav>
        <div className="headerEtcCon">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleSearchBar}
          ></i>
          {isSearchBarOpen && (
            <input
              type="text"
              className="searchBar"
              placeholder="검색어를 입력하세요."
            />
          )}
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
