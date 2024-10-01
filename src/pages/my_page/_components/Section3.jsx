import { useNavigate } from 'react-router-dom';
import '../_styles/section3.css';

export default function Section3() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/mypage/myLogPassword`);
  };

  return (
    <section>
      <div className="myRecord" onClick={() => handleCardClick()}>
        <p>나의 활동</p>
        <i className="fa-solid fa-lock"></i>
      </div>
    </section>
  );
}
