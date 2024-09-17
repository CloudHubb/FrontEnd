import { Outlet } from 'react-router-dom';

import '../header/Header.css';

export default function Header() {
  return (
    <>
      <header>
        <nav className="headerNav">
          {/* TODO: react-router-dom의 Link로 바꾸기 */}
          <h1>
            <a href="#">로고</a>
          </h1>
          <div className="menuCon">
            <a href="#">MAIN</a>
            <a href="#">커뮤니티</a>
            <a href="#">자가테스트</a>
          </div>
        </nav>
        <div className="headerEtcCon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </header>
      <Outlet />
    </>
  );
}
