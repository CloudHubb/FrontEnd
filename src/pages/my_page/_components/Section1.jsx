import { Link } from 'react-router-dom';

import '../_styles/section1.css';

export default function Section1() {
  return (
    <section>
      <div className="myPageWrap">
        <h2 className="myPageUserName">홍유진</h2>
        <Link to="/mypage/edit" className="userInfoModify">
          <i className="fa-sharp fa-solid fa-gear"></i>
          <p>회원정보 수정</p>
        </Link>
      </div>
    </section>
  );
}
