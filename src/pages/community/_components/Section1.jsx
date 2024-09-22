import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import TitleWrapper from './titleToggle';
import TodayPopularCard from './todayPopularCard';

import '../_styles/Section1.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Section1() {
  return (
    <>
      <div className="section1Wrapper">
        <TitleWrapper />
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TodayPopularCard />
          </SwiperSlide>
          <SwiperSlide>
            <TodayPopularCard />
          </SwiperSlide>
          <SwiperSlide>
            <TodayPopularCard />
          </SwiperSlide>
          <SwiperSlide>
            <TodayPopularCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
