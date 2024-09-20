import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../_styles/section2.css';
import PasswordModal from '../../../components/modal/PasswordModal';

export default function Section2() {
  const navigate = useNavigate();

  const [secretCards, setSecretCards] = useState(['비밀 창고 1']);
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addSecretCard = () => {
    setSecretCards([...secretCards, `비밀 창고 ${secretCards.length + 1}`]);
  };

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalSubmit = () => {
    navigate(`/mypage/secretCard/${selectedIndex + 1}`);
  };

  return (
    <section>
      <div className="myPageWrap">
        <ul className="secretCards">
          {secretCards.map((card, index) => (
            <Link to={`/mypage/secretCard/${index + 1}`} key={index}>
              <li
                className="secretCard"
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <p>{card}</p>
                <i className="fa-solid fa-lock"></i>
              </li>
            </Link>
          ))}
        </ul>
        <i className="fa-solid fa-circle-plus" onClick={addSecretCard}></i>
      </div>

      {openModal && (
        <PasswordModal
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}
    </section>
  );
}
