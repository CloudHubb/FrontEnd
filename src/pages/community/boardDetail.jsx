import { useState } from 'react';

// Styles
import './_styles/boardDetail.css';

// Assets
import defaultBoardLike from '/public/boardLike-icon.svg';
import setBoardLike from '/public/setBoardLike-icon.svg';

// Components
import TitleWrapper from './_components/TitleToggle';
import BoardTitle from './_components/BoardTitle';
import BoardInfo from './_components/BoardInfo';
import CommentWrapper from './_components/commentWrapper';
import CommentWriteWrapper from './_components/commentWriteWrapper';

export default function BoardDetail() {
  const [isClick, setIsClick] = useState(false);
  const handleIsClick = (prevClick) => {
    setIsClick(!prevClick);
  };

  const [boardLikeImgSrc, setImgSrc] = useState(defaultBoardLike);
  const handleIconClick = () => {
    setImgSrc((isClick) =>
      isClick === defaultBoardLike ? setBoardLike : defaultBoardLike,
    );
  };

  const [isReply, setIsReply] = useState(false);
  const focusCommentInput = () => {
    setIsReply(true);
  };

  return (
    <>
      <div className="boardDetailWrapper">
        <TitleWrapper />
        <BoardTitle type={'detail'} />
        <BoardInfo type={'detail'} />
        <div className="boardContentWrapper">
          <div className="boardContent">
            민사 소송이란, 넓은 의미에서 개인 간의 권리를 확정하여 개인의 권리를
            보호하고 사법...
          </div>
          <div className="boardContentLikeWrapper">
            <img
              onClick={() => {
                handleIsClick(isClick);
                handleIconClick(isClick);
              }}
              src={boardLikeImgSrc}
              alt="게시글 좋아요 아이콘"
            />
          </div>
        </div>
        <CommentWrapper focusInput={focusCommentInput} />
        {/* <CommentWrapper />
        <CommentWrapper />
        <CommentWrapper /> */}
        <CommentWriteWrapper isFocus={isReply} />
      </div>
    </>
  );
}
