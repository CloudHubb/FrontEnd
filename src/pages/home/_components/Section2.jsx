import { Link, useLocation } from 'react-router-dom';
import '../_styles/section2.css';

export default function Section2() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <section>
      <nav className="section2Nav">
        <Link to="/home">
          <button className={isActive('/home') ? 'activeButton' : ''}>
            Home
          </button>
        </Link>
        <Link to="/#">
          <button className={isActive('/#') ? 'activeButton' : ''}>
            데이트 폭력
          </button>
        </Link>
        <Link to="/#">
          <button className={isActive('/#') ? 'activeButton' : ''}>
            법적 자료
          </button>
        </Link>
        <Link to="/#">
          <button className={isActive('/#') ? 'activeButton' : ''}>
            뉴스 자료
          </button>
        </Link>
        <Link to="/#">
          <button className={isActive('/#') ? 'activeButton' : ''}>
            교육 자료
          </button>
        </Link>
        <Link to="/#">
          <button className={isActive('/#') ? 'activeButton' : ''}>
            상담 센터
          </button>
        </Link>
      </nav>
    </section>
  );
}
