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
  const onSearchCenter = () => {
    const searchQuery = encodeURIComponent(name); // 주소를 네이버 검색어로 인코딩
    const naverSearchUrl = `https://search.naver.com/search.naver?query=${searchQuery}`;
    window.open(naverSearchUrl, '_blank'); // 새 탭에서 네이버 검색 페이지 열기
  };

  const onSearchCenterLocation = () => {
    const searchLocationQuery = encodeURIComponent(location);
    const naverMapSearchUrl = `https://map.naver.com/v5/search/${searchLocationQuery}`;
    window.open(naverMapSearchUrl, '_blank');
  };

  return (
    <>
      <div className="CounselingCenterCardWrapper">
        <div className="centerCardLeftWrapper">
          <div className="centerImageBox" onClick={onSearchCenter}>
            <img src={ThumbnailIcon} alt="센터이미지" />
          </div>
        </div>
        <div className="centerCardRightWrapper">
          <div className="centerTitleWrapper">
            <span onClick={onSearchCenter}>{name}</span>
            <CenterCtgButton type={'centerCtg'} text={'카테고리'} />
          </div>
          <div
            className="centerLocationWrapper"
            onClick={onSearchCenterLocation}
          >
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
