import { Link } from 'react-router-dom';
import '../_styles/titleToggle.css';
import PenIcon from '/public/pen-icon.svg';

export default function titleToggle() {
  return (
    <>
      <div className="titleToggleWrapper">
        <div className="toggleWrapper">
          <p>자유게시판</p>
        </div>
        <Link to={'/board/write'}>
          <div className="writeIcon">
            <img src={PenIcon} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}
