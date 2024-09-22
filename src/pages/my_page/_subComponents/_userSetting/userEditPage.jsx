import { Link } from 'react-router-dom';
import '../../_styles/userEditPage.css';

export default function UserEditPage() {
  return (
    <section>
      <div className="myPageWrap">
        <div className="userEditTitle">
          <h2 className="myPageUserName">홍유진</h2>
          <Link to="/mypage/edit/profile">
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
        </div>
      </div>
      <ul className="userInfoEditCon">
        <li className="userInfoEditCard">
          <h2>비밀번호 설정</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li className="userInfoEditCard">
          <h2>개인 정보 동의</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li className="userInfoEditCard">
          <h2>이용약관</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
      <div className="mypageUserSetting">
        <a href="#">로그아웃</a>
        <a href="#">회원탈퇴</a>
      </div>
    </section>
  );
}
