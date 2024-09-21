import { Link, useParams } from 'react-router-dom';
import './_styles/TestDescriptionPage.css';

const testList = {
  type: ['datingViolence', 'gaslighting'],
  datingViolence: {
    title: '데이트폭력 자가진단 테스트',
    type: 'datingViolence',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis. Malesuada aliquam sem blandit in purus erat a quam. Nisl feugiat arcu sed bibendum magna lectus miblandit. Est iaculis orci amet et quis tellus id. Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis.',
    warning:
      'Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis. Malesuada aliquam sem blandit in purus erat a quam. Nisl feugiat arcu sed bibendum magna lectus miblandit. Est iaculis orci amet et quis tellus id. Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis.',
  },
  gaslighting: {
    title: '가스라이팅',
    type: 'gaslighting',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis. Malesuada aliquam sem blandit in purus erat a quam. Nisl feugiat arcu sed bibendum magna lectus miblandit. Est iaculis orci amet et quis tellus id. Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis.',
    warning:
      'Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis. Malesuada aliquam sem blandit in purus erat a quam. Nisl feugiat arcu sed bibendum magna lectus miblandit. Est iaculis orci amet et quis tellus id. Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis tristique integer semper iaculis.',
  },
};

export default function TestDescriptionPage() {
  const { testType } = useParams();

  const isValidTestType = testList.type.includes(testType);
  const testTitle = isValidTestType
    ? testList[testType]?.title
    : '알 수 없는 테스트';
  const testDescription = testList[testType]?.description;
  const testWarning = testList[testType]?.warning;

  return (
    <>
      <div className="TestWrapper">
        <div className="TestTitleWrapper">
          <div className="backButton">
            <Link to={'/selfTest'}>
              <img src="/public/assets/images/arrow-left.png" alt="뒤로가기" />
            </Link>
          </div>

          <span>{testTitle}</span>
        </div>
        <div className="testDescriptionWrapper">
          <section className="testDescription1">
            <p>시선뉴스</p>
            <p>자가진단 테스트 결과는 마이페이지에서도 확인 할 수 있습니다.</p>
          </section>
          <section className="testDescription2">
            <p>테스트 설명</p>
            <p>{testDescription}</p>
          </section>
          <section className="testDescription3">
            <p>유의사항</p>
            <p>{testWarning}</p>
          </section>
          <section className="buttonSection">
            <Link to={`/selfTest/testPage/${testType}`}>
              <div id="testStartButton">시작하기</div>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
