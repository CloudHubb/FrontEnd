// Assets
import HappyIcon from '/public/emotion-icon/happy-icon.svg';
import SadIcon from '/public/emotion-icon/sad-icon.svg';
import AnnoyedIcon from '/public/emotion-icon/annoyed-icon.svg';
import AngryIcon from '/public/emotion-icon/angry-icon.svg';

// Components
import TitleToggle from '../../community/_components/TitleToggle';
import TitleInputWrapper from '../../community/_components/BoardTitle';

// Styles
import '../_styles/diaryWritePage.css';

export default function diaryWritePage() {
  return (
    <>
      <div className="diaryWriteWrapper">
        <TitleToggle />
        <TitleInputWrapper type={'write'} />
        <textarea
          id="diaryContentInput"
          placeholder="내용을 입력하세요"
        ></textarea>
        <div className="diaryWriteBottomSection">
          <div className="emotionWrapper">
            <span>나의 상태는?</span>
            <div className="emotionBox">
              <img src={HappyIcon} alt="기쁨" />
              <img src={SadIcon} alt="슬픔" />
              <img src={AnnoyedIcon} alt="짜증남" />
              <img src={AngryIcon} alt="화남" />
            </div>
          </div>
          <div id="diaryWriteDoneButton">완료</div>
        </div>
      </div>
    </>
  );
}
