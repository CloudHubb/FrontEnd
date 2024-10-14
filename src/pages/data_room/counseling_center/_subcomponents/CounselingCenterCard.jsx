import PropTypes from 'prop-types';

// Assets
import ThumbnailIcon from '/public/thumbnail-icon.svg';
import MapIcon from '/public/map-icon.svg';
import PhoneIcon from '/public/phone-icon.svg';

// Components
import CenterCtgButton from '/src/components/button/Button';

// Styles
import '../_styles/counselingCard.css';

export default function CounselingCenterCard({ name, location, phone }) {
  return (
    <>
      <div className="CounselingCenterCardWrapper">
        <div className="centerCardLeftWrapper">
          <div className="centerImageBox">
            <img src={ThumbnailIcon} alt="센터이미지" />
          </div>
        </div>
        <div className="centerCardRightWrapper">
          <div className="centerTitleWrapper">
            <span>{name}</span>
            <CenterCtgButton type={'centerCtg'} text={'카테고리'} />
          </div>
          <div className="centerLocationWrapper">
            <img src={MapIcon} alt="지도 아이콘" />
            <span>{location}</span>
          </div>
          <div className="centerNumberWrapper">
            <img src={PhoneIcon} alt="전화번호 아이콘" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </>
  );
}

CounselingCenterCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
