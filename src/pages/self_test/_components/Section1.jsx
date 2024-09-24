import TestCard from '../_components/Card';
import '../_styles/Section1.css';

export default function Section1() {
  return (
    <>
      <div className="section1_container">
        <div className="left_wrapper">
          <p className="left_title">자가진단 테스트</p>
          <p>
            <span id="point">나의 상황</span>이 궁금하다면?
          </p>
        </div>
        <div className="right_wrapper">
          <TestCard
            title={'데이트폭력 자가진단 테스트'}
            testType={'datingViolence'}
          ></TestCard>
          <TestCard
            title={'가스라이팅 자가진단 테스트'}
            testType={'gaslighting'}
          ></TestCard>
        </div>
      </div>
    </>
  );
}
