import PropTypes from 'prop-types';
import '../_styles/Card.css';

export default function Card({ title }) {
  return (
    <div className="cardContainer">
      <p className="cardTitle">{title}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
