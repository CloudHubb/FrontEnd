import { useState } from 'react';

// Style
import './_styles/DatingTestPage.css';

// Assets

import QuestionCard from './_components/QuestionCard';
import { Link } from 'react-router-dom';

const questions = [
  '큰 소리로 호통을 친다.',
  '하루 종일 많은 양의\n전화와 문자를 한다.',
  '통화내역이나 문자 등\n휴대전화를 체크한다.',
  '옷차림이나 헤어스타일 등을\n자기가 좋아하는 것으로\n하게 한다.',
  '다른 사람들을 만나는 것을\n싫어한다.',
  '날마다 만나자고 하거나 기다리지\n말라는 데도 기다린다.',
  '만날 때마다 스킨쉽이나 성관계를\n요구한다.',
  '내 과거를 끈질기게 캐묻는다.	',
  '헤어지면 죽어버리겠다고 한다.',
  '둘이 있을 때는 폭력적이지만 \n다른 사람과 함께 있으면 태도가\n달라진다.',
  '싸우다가 외진 길에 나를 \n버려두고 간 적이 있다.',
  '문을 발로 차거나 물건을 던진다.',
];

export default function DatingTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(12).fill(null));
  const testType = 'dating-violence';

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <div className="datingTestPageWrapper">
        <div className="datingTestTitleWrapper">
          <div className="backButton">
            <Link to={`/selftest/${testType}`}>
              <img src="/public/assets/images/arrow-left.png" alt="돌아가기" />
            </Link>
          </div>
          <span>데이트폭력 자가진단 테스트</span>
        </div>
        <div className="datingTestContentWrapper">
          <QuestionCard
            testType={testType}
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            answer={answers[currentQuestion]}
          />
        </div>
      </div>
    </>
  );
}
