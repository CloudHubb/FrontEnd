import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ type, text }) {
  return (
    <>
      <button className={`${type}-buttonWrapper`}>
        <p className={`${type}-buttonText`}>{text}</p>
      </button>
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
