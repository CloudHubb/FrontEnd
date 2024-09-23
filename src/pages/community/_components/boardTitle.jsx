import { Link } from 'react-router-dom';

// Assets
import MoreButton from '/public/more-vertical.svg';

// Styles
import '../_styles/boardTitle.css';

export default function boardTitle({ type }) {
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
        <div id={type === 'detail' ? 'moreButton_active' : 'moreButton'}>
          {type === 'detail' && <img src={MoreButton} alt="더보기" />}
        </div>
      </div>
    </>
  );
}
