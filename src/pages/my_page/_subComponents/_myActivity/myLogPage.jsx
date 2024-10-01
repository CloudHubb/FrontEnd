import '../../_styles/myLogPage.css';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SelfTestCard from '../../../../components/communityCard/selfTestCard';

export default function MyLogPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="secretCardPasswordTitle">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <p>나의 활동</p>
        <span></span>
      </div>
      <ul className="myLogMenus">
        <li>테스트</li>
        <li>게시물</li>
        <li>상담글</li>
      </ul>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="myLogContainer"
      >
        <SwiperSlide>
          <div className="myLogCardCon">
            <SelfTestCard />
            <SelfTestCard />
            <SelfTestCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myLogCardCon">
            <SelfTestCard />
            <SelfTestCard />
            <SelfTestCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
