import { useState } from 'react';

// Styles
import '../_styles/commentWrapper.css';

// Assets
import defaultLikeIcon from '/public/commentLike-icon.svg';
import setLikeIcon from '/public/setCommentLike-icon.svg';
import commentIcon from '/public/comment-icon.svg';
import moreIcon from '/public/more-vertical.svg';

export default function CommentWrapper() {
  const [isLikeClick, setIsLikeClick] = useState(false);
  const handleIsLikeClick = (prevClick) => {
    setIsLikeClick(!prevClick);
  };

  const [likeIconSrc, setLikeIconSrc] = useState(defaultLikeIcon);
  const handleLikeIconClick = () => {
    setLikeIconSrc((isClick) =>
      isClick === defaultLikeIcon ? setLikeIcon : defaultLikeIcon,
    );
  };

  return (
    <>
      <div className="commentWrapper">
        <div className="commentInfoWrapper">
          <div className="commentInfoLeft">
            <span>익명 1</span>
            <span>07/30 18:03</span>
          </div>
          <div className="commentInfoRight">
            <img
              onClick={() => {
                handleIsLikeClick(isLikeClick);
                handleLikeIconClick(isLikeClick);
              }}
              src={likeIconSrc}
              alt="댓글 좋아요 아이콘"
            />
            <img src={commentIcon} alt="대댓글 아이콘" />
            <img src={moreIcon} alt="더보기 아이콘" />
          </div>
        </div>
        <div className="commentContent">
          수고 하셨습니다.수고 하셨습니다.수고 하셨습니다. 수고 하셨습니다. 수고
          하셨습니다. 수고 하셨습니다. 수고 하셨습니다. 수고 하셨습니다. 수고
          하셨습니다. 수고 하셨습니다. 수고 하셨습니다.수고 하셨습니다. 수고
          하셨습니다.
        </div>
      </div>
    </>
  );
}
