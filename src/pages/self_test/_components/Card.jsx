import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../_styles/Card.css';

export default function Card({ title, id }) {
  return (
    <>
      <Link to={`/selftest/${id}`}>
        <div className="cardContainer">
          <p className="cardTitle">{title}</p>
          <img src="/public/assets/images/arrow-right.png" alt="arrow-right" />
        </div>
      </Link>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
