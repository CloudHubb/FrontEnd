import { useNavigate } from 'react-router-dom';
import '../_styles/section3.css';

export default function Section3({ setSelectedCard }) {
  const navigate = useNavigate();

  const handleEducationCard = (id) => {
    navigate(`/education/:id`);
    setSelectedCard(id);
  };

  return (
    <section className="educationPageSection">
      <div className="currentLocation">
        <p className="currentPageTitle">EDUCATION</p>
        <p className="currentPageSubTitle">우리의 이야기</p>
      </div>
      <div className="educationContainer">
        <h2>TOTAL 160건</h2>
        <ul className="educationWrapper">
          <li
            className="educationCard"
            onClick={() => handleEducationCard(/*id나중에 들어갈 것임 */)}
          >
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
          <li className="educationCard" onClick={handleEducationCard}>
            <div className="educationCardImageCon">
              <img
                src="https://picsum.photos/500?random=1"
                alt="교육자료썸네일"
              />
            </div>
            <div className="educationTitleCon">
              <p className="educationTitle">글제목</p>
              <div className="educationEtcCon">
                <p>발간일</p>
                <p>|</p>
                <p>운영자</p>
              </div>
            </div>
            {/* <Link to="/education/:id" className="educationLink">
              링크여기있다
            </Link> */}
          </li>
        </ul>
      </div>
    </section>
  );
}
