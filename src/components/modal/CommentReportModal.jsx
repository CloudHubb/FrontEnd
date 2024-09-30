import { useState } from 'react';
import PropTypes from 'prop-types';

// Assets
import CloseIcon from '/public/close-icon.svg';
import CommentReportIcon from '/public/commentReport-icon.svg';

// Styles
import './CommentReportModal.css';

export default function CommentReportModal({ closeModal }) {
  const [isCloseClick, setIsCloseClick] = useState(false);
  const handleIsCloseClick = () => {
    setIsCloseClick((prev) => !prev);
  };

  return (
    <>
      <div className="commentReport_modal">
        <div className="closeSection">
          <img
            src={CloseIcon}
            alt="닫기"
            onClick={() => {
              handleIsCloseClick;
              closeModal(isCloseClick);
            }}
            disabled={isCloseClick}
          />
        </div>
        <div>
          <img
            id="commentReportIcon"
            src={CommentReportIcon}
            alt="댓글 신고 아이콘"
          />
          댓글 신고
        </div>
      </div>
    </>
  );
}

CommentReportModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
