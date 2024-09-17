import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../_styles/section1.css';

export default function Section1() {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imgCon">
            <img src="/assets/images/main_bg.png" alt="main_background_img" />
            <h2>너와 나의 이야기</h2>
            <p>
              다락방<span>에서</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon">
            <img src="/assets/images/ex1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon">
            <img src="/assets/images/ex2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon">
            <img src="/assets/images/ex3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon">
            <img src="/assets/images/ex4.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
