import './communityCard.css';

export default function CommunityCard() {
  return (
    <li className="card">
      <p className="communityCardTitle">오늘 상담 받았어요.</p>
      <p className="communityCardContent">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dicta
        quisquam vitae ab nisi doloribus delectus temporibus obcaecati.
        Consectetur magni consequuntur delectus quia libero quam reiciendis
        porro. Vero, accusamus officia?
      </p>
      <div className="reactionCon">
        <div className="reactionWrap">
          <div>
            <i className="fa-regular fa-heart"></i>
            <p className="heartCount">6</p>
          </div>
          <div>
            <i className="fa-regular fa-comment"></i>
            <p className="commentCount">16</p>
          </div>
        </div>
        <div className="etcCon">
          <p>작성시각</p>
          <p> | 익명</p>
        </div>
      </div>
    </li>
  );
}
