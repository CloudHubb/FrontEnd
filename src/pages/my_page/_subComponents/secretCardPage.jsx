import { Link, useLocation, useNavigate } from 'react-router-dom';

import '../_styles/secretCardPage.css';
import { useState } from 'react';

export default function SecretCardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardName, selectedIndex } = location.state || {};
  const [, setSecretItemIndex] = useState(null);

  // TODO: 무한스크롤 구현해야 함
  return (
    <section>
      <div className="secretCardPasswordTitle">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <p>{cardName}</p>
        <span></span>
      </div>
      <ul className="secretContainer">
        <li className="secretItem"></li>
        <li className="secretItem"></li>
        <li className="secretItem"></li>
        <li className="secretItem"></li>
        <li className="secretItem"></li>
        <li className="secretItem"></li>
        <li className="secretItem"></li>
        <li className="secretItem"></li>
      </ul>
      <div className="floatingBtnCon">
        <div className="guideBtn">
          <img
            className="guideLineImg"
            src="/assets/images/guideLineBtn.png"
            alt="가이드라인버튼"
          />
          <button className="guideLineText">가이드라인</button>
        </div>
        <Link
          to={`/mypage/secretCard/${selectedIndex + 1}/writingSecretItem/${setSecretItemIndex}`}
          className="writingBtn"
          state={{ cardName, selectedIndex }}
        >
          <img src="/assets/images/writingBtn.png" alt="글쓰기버튼" />
        </Link>
      </div>
    </section>
  );
}
