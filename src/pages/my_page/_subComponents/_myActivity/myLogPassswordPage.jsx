import { useNavigate } from 'react-router-dom';
import PasswordModal from '../../../../components/modal/PasswordModal';

export default function MyLogPassswordPage() {
  const navigate = useNavigate();

  const handleModalSubmit = () => {
    navigate(`/mypage/myLog`);
  };

  return (
    <section>
      <div className="secretCardPasswordTitle">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <p>나의 활동</p>
        <span></span>
      </div>
      <PasswordModal onSubmit={handleModalSubmit} />
    </section>
  );
}
