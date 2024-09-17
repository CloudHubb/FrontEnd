import Section1 from './_components/Section1';
import Section2 from './_components/Section2';
import Section3 from './_components/Section3';

export default function HomePage() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <section>
        <div>
          <ul>
            <li>
              <div>
                <p>민사소송이란?</p>
                <button>더보기(화살표)</button>
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
        <div>
          <h2>오늘의 정보 보따리</h2>
          <p>
            <span>정보 보따리</span>를 더 원한다면?
          </p>
          <button>더보기</button>
        </div>
      </section>
    </>
  );
}
