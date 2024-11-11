import { Link } from 'react-router-dom';

// Assets
import DiaryWriteIcon from '/public/diaryWrite-icon.svg';

// Styles
import '../_styles/section3.css';

export default function Section3() {
  return (
    <>
      <div className="diaryModalWrapper">
        <div className="diaryCollectButton">마음 모아보기</div>
        <Link to="/diary/write">
          <img
            src={DiaryWriteIcon}
            alt="다이어리 작성하기 버튼"
            id="diaryWriteButton"
          />
        </Link>
      </div>
    </>
  );
}
