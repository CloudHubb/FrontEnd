import { useState } from 'react';
import '../_styles/section1.css';
import FilterMenu from '../_subComponents/_filterMenu/filterMenu';

export default function Section1() {
  const [isFilterBtn, setIsFilterBtn] = useState(false);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  const handleFilterBtn = () => {
    setIsFilterBtn(!isFilterBtn);
    setOpenFilterMenu(!openFilterMenu);
  };

  return (
    <section>
      <div className="searchPageTitleCon">
        <h2 className="searchPageTitle">
          <p>&apos;검색키워드&apos;</p>
          <p>검색 결과</p>
        </h2>
        <div className="filteringBtnCon" onClick={handleFilterBtn}>
          {isFilterBtn === true ? (
            <>
              <i className="fa-solid fa-filter HoverFilteringBtn"></i>
              <FilterMenu />
            </>
          ) : (
            <i className="fa-solid fa-filter filteringBtn"></i>
          )}
        </div>
      </div>
    </section>
  );
}
