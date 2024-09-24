import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../_styles/QuestionCard.css';

// Assets
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

export default function QuestionCard({
  testType,
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  answer,
}) {
  return (
    <>
      <div className="questionCardWrapper">
        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />
        <section className="questionText">
          {question.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              <p>{line}</p>
              <br />
            </React.Fragment>
          ))}
        </section>

        <section className="questionContent">
          <button
            onClick={() => onAnswer('예')}
            id={`yesBtn-${answer === '예' ? 'set' : 'unset'}`}
          >
            예
          </button>
          <button
            onClick={() => onAnswer('아니오')}
            id={`noBtn-${answer === '아니오' ? 'set' : 'unset'}`}
          >
            아니오
          </button>
        </section>

        <section className="prevNextWrapper">
          {currentQuestion > 0 && (
            <button onClick={onPrevious} id={'prevBtn'}>
              이전
            </button>
          )}
          {currentQuestion < totalQuestions - 1 ? (
            <button onClick={onNext} disabled={answer === null} id={'nextBtn'}>
              다음
            </button>
          ) : (
            <Link to={`/selfTest/resultPage/${testType}`}>
              <button disabled={answer === null} id={'showResultBtn'}>
                결과보기
              </button>
            </Link>
          )}
        </section>
      </div>
    </>
  );
}

QuestionCard.propTypes = {
  testType: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  answer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};
