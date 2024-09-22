import '../../_styles/secretCardPasswordPage.css';

import PasswordModal from '../../../../components/modal/PasswordModal';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SecretCardPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardName, selectedIndex } = location.state || {};

  const handleModalSubmit = () => {
    navigate(`/mypage/secretCard/${selectedIndex + 1}`, {
      state: { cardName: cardName, selectedIndex: selectedIndex },
    });
  };
  return (
    <section>
      <div className="secretCardPasswordTitle">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <p>{cardName}</p>
        <span></span>
      </div>
      <PasswordModal onSubmit={handleModalSubmit} />
    </section>
  );
}
