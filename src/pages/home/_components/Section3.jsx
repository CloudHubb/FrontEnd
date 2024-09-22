import { Link } from 'react-router-dom';
import '../_styles/section3.css';
import CommunityCard from '../../../components/communityCard/CommunityCard';

export default function Section3() {
  return (
    <section>
      <div className="wrap">
        <div className="titleCon">
          <h2>실시간 인기 이야기</h2>
          <p>
            <span className="redLetter">더 많은 이야기</span>가 궁금하다면?
          </p>
          <Link to="/community">
            <button className="addMoreBtn">
              <img src="/assets/images/add_more_btn.png" alt="더보기버튼" />
            </button>
          </Link>
        </div>
        <div className="communityCon">
          <ul className="cards">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </ul>
        </div>
      </div>
    </section>
  );
}
