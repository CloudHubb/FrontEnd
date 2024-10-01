import { useNavigate } from 'react-router-dom';
import '../../_styles/userProfileEditPage.css';

export default function UserProfileEditPage() {
  const navigate = useNavigate();

  return (
    <section>
      <form action="submit">
        <div className="userProfileTitle">
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => {
              navigate(-1);
            }}
          ></i>
          <p>프로필 수정</p>
          <span></span>
        </div>
        <div className="userProfileInputCon">
          <p>닉네임</p>
          <div>
            <input
              type="text"
              className="profileEditInput"
              placeholder="변경할 닉네임을 입력해주세요."
            />
            <label htmlFor="profileEditInput">중복 확인</label>
          </div>
          <div className="profileEditErrorMsg">
            {/* TODO: 오류 메세지 들어갈 자리 */}울랄라dkfja;ldkkfja;ldkfja;dlk
          </div>
        </div>
        <button type="submit" className="profileEditBtn">
          저장
        </button>
      </form>
    </section>
  );
}
