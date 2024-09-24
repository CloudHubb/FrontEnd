import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../modal/PasswordModal.css';

export default function PasswordModal({ onSubmit }) {
  const navigate = useNavigate();
  const inputRef = useRef([]);

  const moveFocus = (currentIndex) => {
    const nextInput = inputRef.current[currentIndex + 1];
    if (nextInput && inputRef.current[currentIndex].value.length === 1) {
      nextInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="modalCon">
        <i className="fa-solid fa-xmark" onClick={() => navigate(-1)}></i>
        <p className="passwordTitle">비밀번호</p>
        <div className="passwordInputCon">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              ref={(element) => (inputRef.current[index] = element)}
              id={`input${index + 1}`}
              maxLength="1"
              onChange={() => moveFocus(index)}
            />
          ))}
        </div>
        <button type="submit" className="passwordBtn">
          확인
        </button>
        <Link to="/#">비밀번호 찾기</Link>
      </form>
    </div>
  );
}
