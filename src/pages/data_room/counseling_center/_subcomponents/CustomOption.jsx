import { useState } from 'react';
import PropTypes from 'prop-types';

// Assets
import DownArrowIcon from '/public/arrow/down-arrow-icon.svg';

// Styles
import '../_styles/customOption.css';

export default function CustomOption({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="customOptionWrapper">
      <div className="option__selected" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <img src={DownArrowIcon} alt="지역 더보기" />
      </div>
      {isOpen && (
        <div className="regionOptions">
          {options.map((option, index) => (
            <div
              key={index}
              className="regionOption"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

CustomOption.propTypes = {
  options: PropTypes.any.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
