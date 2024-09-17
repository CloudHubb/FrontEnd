import '../_styles/section3.css';

export default function Section3() {
  return (
    <section>
      <div className="wrap">
        <div className="titleCon">
          <h2>실시간 인기 이야기</h2>
          <p>
            <span className="redLetter">더 많은 이야기</span>가 궁금하다면?
          </p>
          <button className="addMoreBtn">
            <img src="/assets/images/add_more_btn.png" alt="더보기버튼" />
          </button>
        </div>
        <div className="communityCon">
          <ul className="cards">
            <li className="card">
              <p>오늘 상담 받았어요.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                dicta quisquam vitae ab nisi doloribus delectus temporibus
                obcaecati. Consectetur magni consequuntur delectus quia libero
                quam reiciendis porro. Vero, accusamus officia?
              </p>
              <div className="reactionCon">
                <div className="reactionWrap">
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <p className="heartCount">6</p>
                  </div>
                  <div>
                    <i className="fa-regular fa-comment"></i>
                    <p className="commentCount">16</p>
                  </div>
                </div>
                <div className="etcCon">
                  <p>작성시각</p>
                  <p> | 익명</p>
                </div>
              </div>
            </li>
            <li className="card">
              <p>오늘 상담 받았어요.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                dicta quisquam vitae ab nisi doloribus delectus temporibus
                obcaecati. Consectetur magni consequuntur delectus quia libero
                quam reiciendis porro. Vero, accusamus officia?
              </p>
              <div className="reactionCon">
                <div className="reactionWrap">
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <p className="heartCount">6</p>
                  </div>
                  <div>
                    <i className="fa-regular fa-comment"></i>
                    <p className="commentCount">16</p>
                  </div>
                </div>
                <div className="etcCon">
                  <p>작성시각</p>
                  <p> | 익명</p>
                </div>
              </div>
            </li>
            <li className="card">
              <p>오늘 상담 받았어요.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                dicta quisquam vitae ab nisi doloribus delectus temporibus
                obcaecati. Consectetur magni consequuntur delectus quia libero
                quam reiciendis porro. Vero, accusamus officia?
              </p>
              <div className="reactionCon">
                <div className="reactionWrap">
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <p className="heartCount">6</p>
                  </div>
                  <div>
                    <i className="fa-regular fa-comment"></i>
                    <p className="commentCount">16</p>
                  </div>
                </div>
                <div className="etcCon">
                  <p>작성시각</p>
                  <p> | 익명</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
