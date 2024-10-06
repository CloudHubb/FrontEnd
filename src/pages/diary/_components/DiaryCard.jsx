import PropTypes from 'prop-types';

// Assets
import HappyIcon from '/public/emotion-icon/happy-icon.svg';
import SadIcon from '/public/emotion-icon/sad-icon.svg';
import AnnoyedIcon from '/public/emotion-icon/annoyed-icon.svg';
import AngryIcon from '/public/emotion-icon/angry-icon.svg';

// Styles
import '../_styles/diaryCard.css';

export default function DiaryCard({ emotion }) {
  const renderEmotionIcon = () => {
    switch (emotion) {
      case 'happy':
        return <img src={HappyIcon} alt="기분좋음" />;
      case 'sad':
        return <img src={SadIcon} alt="슬픔" />;
      case 'annoyed':
        return <img src={AnnoyedIcon} alt="짜증남" />;
      case 'angry':
        return <img src={AngryIcon} alt="화남" />;
      default:
        return <img src={HappyIcon} alt="기본" />;
    }
  };
  return (
    <>
      <div className="diaryCardWrapper">
        <div className="diaryTitle">
          흑백요리사를 보면서 적는 일기, 10월 28일일기, 오늘 있었던 일들을
        </div>
        <div className="emotionSection">{renderEmotionIcon()}</div>
      </div>
    </>
  );
}

DiaryCard.propTypes = {
  emotion: PropTypes.string.isRequired,
};
