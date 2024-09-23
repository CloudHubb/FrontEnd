import { Link } from 'react-router-dom';
import '../_styles/todayPopularCard.css';

import HeartIcon from '/public/heart.svg';
import CommentIcon from '/public/message-circle.svg';

export default function todayPopularCard({ boardId }) {
  return (
    <>
      <Link to={`/board/${boardId}`}>
        <div className="todayPopularCardWrapper">
          <p>오늘 상담 받았어요.</p>
          <p>
            민사 소송이란, 넓은 의미에서 개인 간의 권리를 확정하여 개인의 권리를
            보호하고 사법민사 소송이란, 넓은 의미에서 개인 간의 권리를 확정하여
            개인의 권리를 보호하고 사법...
          </p>
          <div className="todayPopularCardBottom">
            <div className="boardInfoSection">
              <div className="likeIconWrapper">
                <img src={HeartIcon} alt="좋아요" />
                <span>3</span>
              </div>
              <div className="commentIconWrapper">
                <img src={CommentIcon} alt="댓글" />
                <span>16</span>
              </div>
            </div>
            <span>익명</span>
          </div>
        </div>
      </Link>
    </>
  );
}
