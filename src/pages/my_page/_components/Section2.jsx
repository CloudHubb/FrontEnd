import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../_styles/section2.css';

export default function Section2() {
  const navigate = useNavigate();

  const [secretCards, setSecretCards] = useState(['비밀 창고 1']);
  const [, setSelectedIndex] = useState(null);

  const addSecretCard = () => {
    setSecretCards([...secretCards, `비밀 창고 ${secretCards.length + 1}`]);
  };

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    navigate(`/mypage/secretCardPassword/${index + 1}`, {
      state: { cardName: secretCards[index], selectedIndex: index },
    });
  };

  return (
    <section>
      <div className="myPageWrap">
        <ul className="secretCards">
          {secretCards.map((card, index) => (
            <li
              className="secretCard"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <p>{card}</p>
              <i className="fa-solid fa-lock"></i>
            </li>
          ))}
        </ul>
        <div className="secretCardAddBtn">
          <i className="fa-solid fa-circle-plus" onClick={addSecretCard}></i>
        </div>
      </div>
    </section>
  );
}
