import '../_styles/section4.css';

export default function Section4() {
  return (
    <section>
      <div className="wrap">
        <div className="legalCon">
          <ul className="legalCards">
            <li className="legalCard">
              <div className="title">
                <p>민사소송이란?</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                dicta quisquam vitae ab nisi doloribus delectus temporibus
                obcaecati. Consectetur magni consequuntur delectus quia libero
                quam reiciendis porro. Vero, accusamus officia?
              </p>
            </li>
            <li className="legalCard">
              <div className="title">
                <p>민사소송이란?</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                dicta quisquam vitae ab nisi doloribus delectus temporibus
                obcaecati. Consectetur magni consequuntur delectus quia libero
                quam reiciendis porro. Vero, accusamus officia?
              </p>
            </li>
            <li className="legalCard">
              <div className="title">
                <p>민사소송이란?</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                dicta quisquam vitae ab nisi doloribus delectus temporibus
                obcaecati. Consectetur magni consequuntur delectus quia libero
                quam reiciendis porro. Vero, accusamus officia?
              </p>
            </li>
          </ul>
        </div>
        <div className="legalTitleCon">
          <h2>오늘의 정보 보따리</h2>
          <p>
            <span className="redLetter">정보 보따리</span>를 더 원한다면?
          </p>
          <button className="addMoreBtn">
            <img src="/assets/images/add_more_btn.png" alt="더보기버튼" />
          </button>
        </div>
      </div>
    </section>
  );
}
