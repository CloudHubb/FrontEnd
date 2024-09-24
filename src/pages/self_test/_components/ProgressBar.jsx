import PropTypes from 'prop-types';
import '../_styles/ProgressBar.css';

export default function ProgressBar({ currentQuestion, totalQuestions }) {
  // 진행률 계산 (퍼센트)
  const progressPercentage = (currentQuestion + 1) / totalQuestions;

  return (
    <>
      <div className="progressBarWrapper">
        <div
          className={'progressBar'}
          style={{
            width: `${progressPercentage * 100}%`,
          }}
        />
      </div>
    </>
  );
}

ProgressBar.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};
