import '../_styles/Section2.css';

import BoardCard from '../../../components/communityCard/boardCard';

export default function Section2() {
  return (
    <>
      <div className="section2Wrapper">
        <div className="boardFilterWrapper">
          <span>최신순</span>
          <span>조회순</span>
        </div>
        <div className="boardList">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </div>
    </>
  );
}
