import { useState } from 'react';
import '../../_styles/filterMenu.css';

const filterItems = [
  '데이트 폭력',
  '법적 자료',
  '뉴스 자료',
  '교육 자료',
  '상담 센터',
  '커뮤니티',
];

export default function FilterMenu() {
  const [, setSelectFilter] = useState([]);

  const handleFilterMenu = (item) => {
    // 선택된 필터 항목을 업데이트합니다.
    setSelectFilter((prev) => {
      if (prev.includes(item)) {
        // 이미 선택된 항목이면 제거
        return prev.filter((filter) => filter !== item);
      } else {
        // 새로운 항목을 추가
        return [...prev, item];
      }
    });
  };

  return (
    <div className="searchPageFilterMenuCon">
      <div className="searchPageFilterMenu">
        <p className="searchPageFilterTitle">필터</p>
        <ul className="searchPageFilterItems">
          {filterItems.map((item) => (
            <li key={item} onClick={handleFilterMenu}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="searchPageFilterBtn">확인하기</button>
    </div>
  );
}
