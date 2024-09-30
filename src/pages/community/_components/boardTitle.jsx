import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Assets
import MoreButton from '/public/more-vertical.svg';
import UnsetCheckIcon from '/public/unsetCheck.svg';
import SetCheckIcon from '/public/setCheck.svg';

// Styles
import '../_styles/boardTitle.css';

export default function BoardTitle({ type }) {
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const toggleModal = () => {
    setIsOptionModalOpen(!isOptionModalOpen);
  };

  const [isDeleteOptionClick, setIsDeleteOptionClick] = useState(false);
  const handleDeleteOption = () => {
    setIsDeleteOptionClick(!isDeleteOptionClick);
  };

  const [isDeleteMouseHover, setIsDeleteMouseHover] = useState(UnsetCheckIcon);

  const handleDeleteMouseEnter = () => {
    setIsDeleteMouseHover(SetCheckIcon);
  };
  const handleDeleteMouseLeave = () => {
    setIsDeleteMouseHover(UnsetCheckIcon);
  };

  const [isEditMouseHover, setIsEditMouseHover] = useState(UnsetCheckIcon);
  const handleEditMouseEnter = () => {
    setIsEditMouseHover(SetCheckIcon);
  };
  const handleEditMouseLeave = () => {
    setIsEditMouseHover(UnsetCheckIcon);
  };

  return (
    <>
      <div
        className={
          type === 'detail'
            ? 'boardDetailTitleWrapper'
            : 'boardWriteTitleWrapper'
        }
      >
        <div id="backButton">
          <Link to={`/community`}>
            <img src="/public/assets/images/arrow-left.png" alt="돌아가기" />
          </Link>
        </div>
        {type === 'detail' && <span>오늘 상담 받았어요.</span>}
        {type !== 'detail' && (
          <input
            id="titleWrite__input"
            type="text"
            placeholder="제목을 입력하세요"
          />
        )}
        <div
          id={type === 'detail' ? 'moreButton_active' : 'moreButton'}
          onClick={toggleModal}
        >
          {type === 'detail' && <img src={MoreButton} alt="더보기" />}
        </div>
      </div>

      {isOptionModalOpen && (
        <div className="optionModal">
          <ul>
            <li>
              <button
                className="optionModal_button"
                onMouseEnter={handleDeleteMouseEnter}
                onMouseLeave={handleDeleteMouseLeave}
                onClick={() => {
                  handleDeleteOption;
                }}
              >
                삭제
                <img src={isDeleteMouseHover} alt="삭제하기" />
              </button>
            </li>
            <li>
              <div id="optionModalLine" />
            </li>
            <li>
              <button
                className="optionModal_button"
                onMouseEnter={handleEditMouseEnter}
                onMouseLeave={handleEditMouseLeave}
                onClick={() => console.log('수정')}
              >
                수정
                <img src={isEditMouseHover} alt="수정하기" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

BoardTitle.propTypes = {
  type: PropTypes.string.isRequired,
};
