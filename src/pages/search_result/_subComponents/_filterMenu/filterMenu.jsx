import '../../_styles/filterMenu.css';

export default function FilterMenu() {
  return (
    <div className="searchPageFilterMenuCon">
      <div className="searchPageFilterMenu">
        <p className="searchPageFilterTitle">필터</p>
        <ul className="searchPageFilterItems">
          <li>데이트 폭력</li>
          <li>법적 자료</li>
          <li>뉴스 자료</li>
          <li>교육 자료</li>
          <li>상담 센터</li>
          <li>커뮤니티</li>
        </ul>
      </div>
      <button className="searchPageFilterBtn">확인하기</button>
    </div>
  );
}
