import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import defaultLikeIcon from '/public/commentLike-icon.svg';
import setLikeIcon from '/public/setCommentLike-icon.svg';
import commentIcon from '/public/comment-icon.svg';
import moreIcon from '/public/more-vertical.svg';

// Components
import CommentReportModal from '../../../components/modal/CommentReportModal';

// Styles
import '../_styles/commentWrapper.css';

export default function CommentWrapper({ focusInput }) {
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

  const [isCommentModal, setIsCommentModal] = useState(false);
  const toggleCommentModal = () => {
    setIsCommentModal((prev) => !prev);
  };
  const closeCommentModal = () => {
    setIsCommentModal(false);
  };
  useEffect(() => {
    if (isCommentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCommentModal]);

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
            <img src={commentIcon} alt="대댓글 아이콘" onClick={focusInput} />
            <img
              src={moreIcon}
              alt="더보기 아이콘"
              onClick={toggleCommentModal}
              disabled={isCommentModal}
            />
          </div>
        </div>
        <div className="commentContent">
          수고 하셨습니다.수고 하셨습니다.수고 하셨습니다. 수고 하셨습니다. 수고
          하셨습니다. 수고 하셨습니다. 수고 하셨습니다. 수고 하셨습니다. 수고
          하셨습니다. 수고 하셨습니다. 수고 하셨습니다.수고 하셨습니다. 수고
          하셨습니다.
        </div>
      </div>
      {isCommentModal && (
        <>
          <div
            className="commentModalOverlay"
            onClick={closeCommentModal}
          ></div>
          <div className="commentModalWrapper">
            <CommentReportModal closeModal={closeCommentModal} />
          </div>
        </>
      )}
    </>
  );
}

CommentWrapper.propTypes = {
  focusInput: PropTypes.func.isRequired,
};
