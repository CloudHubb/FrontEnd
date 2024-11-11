import { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import CustomOption from './CustomOption';

// Styles
import '../_styles/regionDropMenu.css';

const regions = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치시',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도',
];

export default function RegionDropMenu({ onSelectRegion }) {
  const [selectedRegion, setSelectedRegion] = useState('지역을 선택해주세요');

  const onChangeRegion = (region) => {
    // const region = event.target.text;
    setSelectedRegion(region);
    onSelectRegion(region); // 부모 컴포넌트로 선택한 지역 전달
  };

  return (
    <div className="regionDropMenuWrapper">
      <label htmlFor="regionSelect">지역</label>
      <CustomOption
        options={regions}
        selected={selectedRegion}
        onSelect={onChangeRegion}
      />
    </div>
  );
}

RegionDropMenu.propTypes = {
  onSelectRegion: PropTypes.func.isRequired,
};
