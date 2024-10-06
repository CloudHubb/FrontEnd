import { Link } from 'react-router-dom';

// Styles
import '../_styles/section1.css';

export default function Section1() {
  return (
    <>
      <div className="diaryTitleWrapper">
        <div id="backButton">
          <Link to={`/home`}>
            <img src="/public/assets/images/arrow-left.png" alt="돌아가기" />
          </Link>
        </div>
        <span>마음 일기</span>
      </div>
    </>
  );
}
