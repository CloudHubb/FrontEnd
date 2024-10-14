import { Link } from 'react-router-dom';

import '../_components/HeaderMenu.css';

export default function HeaderMenu() {
  return (
    <div className="headerMenuCon">
      <Link to="/mypage">
        <div className="userName">
          <p>YOUJIN</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </Link>
      <div className="category">
        <Link to="/#">데이트 폭력</Link>
        <Link to="/#">법적 자료</Link>
        <Link to="/news">뉴스 자료</Link>
        <Link to="/#">교육 자료</Link>
        <Link to="/#">상담 센터</Link>
      </div>
      <div className="etcMenu">
        <Link to="/#">
          <i className="fa-regular fa-life-ring"></i> 도움말
        </Link>
        <Link to="/#">
          <i className="fa-regular fa-circle-question"></i> 고객센터
        </Link>
        <Link to="/#">
          <i className="fa-regular fa-bookmark"></i> 북마크
        </Link>
      </div>
      <div className="userSetting">
        <Link to="/#">로그아웃</Link>
        <Link to="/#">회원탈퇴</Link>
      </div>
    </div>
  );
}
