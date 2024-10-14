import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Components
import CenterCard from '../_subcomponents/CounselingCenterCard';

// Styles
import '../_styles/counselingList.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CounselingCenterList({ title }) {
  const centers = [
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },

    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
    {
      name: '연세한결소아청소년과의원',
      location: '서울 강서구 마곡서1로 115-1 305호',
      phone: '0507-1400-3006',
    },
  ];

  return (
    <>
      <div className="centerListWrapper">
        <div className="centerListTitle">{title}</div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          direction="horizontal"
          className="centerSwiper"
        >
          {Array.from({ length: Math.ceil(centers.length / 6) }).map(
            (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="centerCardWrapper">
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
