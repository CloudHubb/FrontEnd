import './_styles/DatingTestPage.css';

export default function DatingTestPage() {
  return (
    <>
      <div className="datingTestWrapper">
        <div className="datingTestTitleWrapper">
          <img src="/public/assets/images/arrow-left.png" alt="뒤로가기" />
          <span>감정적 데이트폭력 자가진단 테스트</span>
        </div>
        <div className="testDescriptionWrapper">
          <section className="testDescription1">
            <p>시선뉴스</p>
            <p>자가진단 테스트 결과는 마이페이지에서도 확인 할 수 있습니다.</p>
          </section>
          <section className="testDescription2">
            <p>테스트 설명</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla eu egestas convallis
              tristique integer semper iaculis. Malesuada aliquam sem blandit in
              purus erat a quam. Nisl feugiat arcu sed bibendum magna lectus mi
              blandit. Est iaculis orci amet et quis tellus id. Lorem ipsum
              dolor sit amet consectetur. Nulla eu egestas convallis tristique
              integer semper iaculis.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
