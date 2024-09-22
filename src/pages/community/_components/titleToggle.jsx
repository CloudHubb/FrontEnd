import '../_styles/titleToggle.css';
import PenIcon from '/public/pen-icon.svg';

export default function titleToggle() {
  return (
    <>
      <div className="titleToggleWrapper">
        <div className="toggleWrapper">
          <p>자유게시판</p>
        </div>
        <div className="writeIcon">
          <img src={PenIcon} alt="" />
        </div>
      </div>
    </>
  );
}
