// Styles
import '../_styles/boardInfo.css';

// Assets
import HeartIcon from '/public/heart.svg';
import CommentIcon from '/public/message-circle.svg';

export default function boardInfo({ type }) {
  const writeDate = '18 : 53';
  const writer = '익명';

  return (
    <>
      <div
        className={
          type === 'detail' ? 'detailBoardInfoWrapper' : 'boardInfoWrapper'
        }
      >
        <div
          className={
            type === 'detail' ? 'detailBoardInfoSection' : 'boardInfoSection'
          }
        >
          <div className="likeIconWrapper">
            <img src={HeartIcon} alt="좋아요" />
            <span>3</span>
          </div>
          <div className="commentIconWrapper">
            <img src={CommentIcon} alt="댓글" />
            <span>16</span>
          </div>
        </div>
        <div
          className={
            type === 'detail' ? 'detailBoardDateSection' : 'boardDateSection'
          }
        >
          {`${writeDate} | ${writer}`}
        </div>
      </div>
    </>
  );
}
