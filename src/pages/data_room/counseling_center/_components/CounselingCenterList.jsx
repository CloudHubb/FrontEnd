import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import CenterCard from '../_subcomponents/CounselingCenterCard';

// Styles
import '../_styles/counselingList.css';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';

export default function CounselingCenterList({ title }) {
  const centers = [
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울특별시',
      phone: '010-1234-5678',
    },
  ];

  return (
    <>
      <div className="centerListWrapper">
        <div className="centerListTitle">{title}</div>
        <Swiper
          direction="horizontal" // 슬라이드 방향은 가로
          spaceBetween={30} // 슬라이드 간 간격 설정
          slidesPerView={1} // 한 슬라이드 안에 6개가 보이도록 설정
          pagination={{ clickable: true }} // pagination 활성화
          className="centerSwiper" // 커스텀 클래스네임 추가
        >
          {/* 6개씩 슬라이드에 넣기 위해 슬라이드를 나눔 */}
          {Array.from({ length: Math.ceil(centers.length / 6) }).map(
            (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="centerCardWrapper">
                  {/* 슬라이드 안에 6개의 CenterCard를 렌더링 */}
                  {centers
                    .slice(slideIndex * 6, (slideIndex + 1) * 6)
                    .map((center, index) => (
                      <CenterCard
                        key={index}
                        name={center.name}
                        location={center.location}
                        phone={center.phone}
                      />
                    ))}
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </>
  );
}

CounselingCenterList.propTypes = {
  title: PropTypes.string.isRequired,
};
