import '../_styles/section2.css';
import CommunityCard from '../../../components/communityCard/CommunityCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Section2() {
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
        className="searchResultPageSlide"
      >
        <SwiperSlide>
          <div className="gridContainer">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gridContainer">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
