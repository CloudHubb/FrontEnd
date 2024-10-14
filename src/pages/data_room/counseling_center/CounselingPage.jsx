import { useState } from 'react';

// Components
import CenterList from './_components/CounselingCenterList';
import CategoryBtn from '/src/components/button/Button';
import RegionDropMenu from './_subcomponents/RegionDropMenu';

// Styles
import './_styles/counselingPage.css';

export default function CounselingPage() {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  return (
    <>
      <div className="counselingPageWrapper">
        <div className="counselingPageLeft">
          <div className="counselingFilterWrapper">
            <p>COUNSELING CENTER</p>
            <p>우리를 위한 상담센터</p>
            <div className="locationFilter">
              <RegionDropMenu onSelectRegion={handleSelectRegion} />
            </div>
            <p>카테고리</p>
            <div className="categoryWrapper">
              <CategoryBtn type={'centerCtg'} text={'카테고리'} />
              <CategoryBtn type={'centerCtg'} text={'카테고리'} />
              <CategoryBtn type={'centerCtg'} text={'카테고리'} />
              <CategoryBtn type={'centerCtg'} text={'카테고리'} />
            </div>
          </div>
        </div>
        <div className="counselingPageRight">
          <CenterList title={`${selectedRegion} 상담 센터 목록`} />
        </div>
      </div>
    </>
  );
}
