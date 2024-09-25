import { useState } from 'react';

// Styles
import '../_styles/commentWriteWrapper.css';

// Assets
import commentSendBtn from '/public/commentSend-icon.svg';

export default function CommentWriteWrapper() {
  const [isAnonyClick, setIsAnonyClick] = useState(false);
  const [anonyClassName, setAnonyClassName] = useState('defaultAnonymityBtn');

  const handleAnonyClick = () => {
    setIsAnonyClick((prevClick) => {
      setAnonyClassName(prevClick ? 'defaultAnonymityBtn' : 'setAnonymityBtn');
      return !prevClick;
    });
  };

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
          <input placeholder="댓글을 입력해주세요." />
          <img src={commentSendBtn} alt="작성" />
        </div>
      </div>
    </>
  );
}
