import TestResultCard from '../_components/ResultCard';
import '../_styles/Section2.css';

export default function Section2() {
  return (
    <>
      <div className="section2Container">
        <div className="section2Line"></div>
        <p id="section2Title">결과 한 눈에 보기</p>
        <div className="testCardList">
          <TestResultCard />
          <TestResultCard />
          <TestResultCard />
        </div>
      </div>
    </>
  );
}
