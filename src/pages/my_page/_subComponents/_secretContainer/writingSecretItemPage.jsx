import { useLocation, useNavigate } from 'react-router-dom';

import '../../_styles/writingSecretItemPage.css';

export default function WritingSecretItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardName } = location.state || {}; // selectedIndex
  return (
    <section>
      <div className="secretCardPasswordTitle">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <p>{cardName}</p>
        <span></span>
      </div>
      <div className="secretItemTitleInput">
        <input type="text" placeholder="제목을 입력하세요." />
      </div>
      <div className="secretItemContentCon">
        <textarea
          name="secretItemArea"
          id="secretItemArea"
          className="secretItemArea"
          placeholder="내용을 입력하세요."
        ></textarea>
        <div className="guidLineContent">가이드라인 들어갈 자리</div>
      </div>
      <div className="secretItemControlCon">
        <div className="guideLind_clip">
          <button className="secretItemGuideLineBtn">가이드라인</button>
          <button className="attachmentBtn">
            <i className="fa-solid fa-paperclip"></i>
          </button>
        </div>
        <button className="uploadSecretItemBtn">완료</button>
      </div>
    </section>
  );
}
