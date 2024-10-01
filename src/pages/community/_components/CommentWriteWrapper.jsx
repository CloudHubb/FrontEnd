import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import commentSendBtn from '/public/commentSend-icon.svg';

// Styles
import '../_styles/commentWriteWrapper.css';

export default function CommentWriteWrapper({ isFocus }) {
  const [isAnonyClick, setIsAnonyClick] = useState(false);
  const [anonyClassName, setAnonyClassName] = useState('defaultAnonymityBtn');

  const handleAnonyClick = () => {
    setIsAnonyClick((prevClick) => {
      setAnonyClassName(prevClick ? 'defaultAnonymityBtn' : 'setAnonymityBtn');
      return !prevClick;
    });
  };

  const commentInputRef = useRef(null);
  const handleCommentIconClick = () => {
    if (isFocus) {
      commentInputRef.current.focus();
    }
  };

  // useEffect(handleCommentIconClick);
  useEffect(() => {
    handleCommentIconClick();
  });

  return (
    <>
      <div className="commentWriteWrapper">
        <div
          className={anonyClassName}
          onClick={() => {
            handleAnonyClick(isAnonyClick);
          }}
        >
          익명
        </div>
        <div className="commentWriteSection">
          <input placeholder="댓글을 입력해주세요." ref={commentInputRef} />
          <img src={commentSendBtn} alt="작성" />
        </div>
      </div>
    </>
  );
}

CommentWriteWrapper.propTypes = {
  isFocus: PropTypes.bool.isRequired,
};
