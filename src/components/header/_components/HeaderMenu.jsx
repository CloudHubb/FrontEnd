import '../_components/HeaderMenu.css';

export default function HeaderMenu() {
  return (
    <div className="headerMenuCon">
      <div className="userName">
        <p>YOUJIN</p>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className="category">
        {/* TODO: Link로 바꾸기 */}
        <a href="#">데이트 폭력</a>
        <a href="#">법적 자료</a>
        <a href="#">뉴스 자료</a>
        <a href="#">교육 자료</a>
        <a href="#">상담 센터</a>
      </div>
      <div className="etcMenu">
        <a href="#">
          <i className="fa-regular fa-life-ring"></i> 도움말
        </a>
        <a href="#">
          <i className="fa-regular fa-circle-question"></i> 고객센터
        </a>
        <a href="#">
          <i className="fa-regular fa-bookmark"></i> 북마크
        </a>
      </div>
      <div className="userSetting">
        <a href="#">로그아웃</a>
        <a href="#">회원탈퇴</a>
      </div>
    </div>
  );
}
