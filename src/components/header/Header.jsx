import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import '../header/Header.css';

import HeaderMenu from './_components/HeaderMenu';

import LogoIcon from '/public/Logo.svg';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [keyBoard, setKeyboard] = useState('');

  const searchInputRef = useRef(null); // ref 추가

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleToggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  const handleSearchBar = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      navigate('/search'); // 바꿀 예정
      setKeyboard(''); // state 값 초기화
      if (searchInputRef.current) {
        searchInputRef.current.value = ''; // 입력창 초기화
      }
      console.log(keyBoard); // 비동기 상태이므로 이전 값 출력
    }
  };

  useEffect(() => {
    setIsSearchBarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header>
        <nav className="headerNav">
          <h1>
            <Link to="/home">
              <img src={LogoIcon} alt="다락방 로고" />
            </Link>
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
              to="/diary"
              className={isActive('/diary') ? 'activeLink' : ''}
            >
              마음일기
            </Link>
            <Link
              to="/selftest"
              className={isActive('/selftest') ? 'activeLink' : ''}
            >
              자가테스트
            </Link>
            <Link
              to="/mypage"
              className={isActive('/mypage') ? 'activeLink' : ''}
            >
              비밀창고
            </Link>
          </div>
        </nav>
        <div className="headerEtcCon">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleToggleSearchBar}
          ></i>
          {isSearchBarOpen && (
            <input
              type="text"
              className="searchBar"
              placeholder="검색어를 입력하세요."
              ref={searchInputRef} // ref 연결
              onChange={(e) => {
                setKeyboard(e.target.value);
              }}
              onKeyUp={handleSearchBar}
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
