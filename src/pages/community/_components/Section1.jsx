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
        <div className="todayPopularList">
          <span>오늘의 인기글</span>
          <div className="todayPopularListTitleBox" />
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            freeMode={false}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TodayPopularCard boardId={7} />
            </SwiperSlide>
            <SwiperSlide>
              <TodayPopularCard boardId={8} />
            </SwiperSlide>
            <SwiperSlide>
              <TodayPopularCard boardId={9} />
            </SwiperSlide>
            <SwiperSlide>
              <TodayPopularCard boardId={10} />
            </SwiperSlide>
          </Swiper>
          <div className="todayPopularListTitleBox2" />
        </div>
      </div>
    </>
  );
}
