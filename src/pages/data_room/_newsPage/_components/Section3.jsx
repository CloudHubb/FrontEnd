import axios from 'axios';
import '../_styles/section3.css';
import { useEffect, useState } from 'react';

export default function Section3() {
  const [newsData, setNewsData] = useState([]);
  const fetchNewsApi = async () => {
    const url = '/api/v1/search/news.json';
    const options = {
      params: { query: '데이트 폭력', display: 6, start: 1, sort: 'date' },
      // 요청헤더 설정
      headers: {
        'X-Naver-Client-Id': 'VPsdFFGoyEouOnnVN9DK',
        'X-Naver-Client-Secret': 'F_4c6GihJO',
      },
    };
    const response = await axios.get(url, options);
    console.log(response.data);
    setNewsData(response.data.items);
  };

  const formatData = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  useEffect(() => {
    fetchNewsApi();
  }, []);

  return (
    <section className="newsPageSection">
      <div className="currentLocation">
        <p className="currentPageTitle">NEWS</p>
        <p className="currentPageSubTitle">우리의 이야기</p>
      </div>
      <div className="newsContainer">
        <h2>HEADLINE NEWS</h2>
        <ul className="newsWrapper">
          {newsData.map((news, i) => (
            <li className="newsCard" key={i}>
              {/* <div className="newsCardImageCon">
                <img src="" alt="뉴스썸네일" />
              </div> */}
              <div className="newsTitleCon">
                <p
                  className="newsTitle"
                  dangerouslySetInnerHTML={{ __html: news.title }}
                />
                <div className="originalLink">
                  <p>원문 보러가기</p>
                  <i className="fa-regular fa-newspaper"></i>
                </div>
              </div>
              <p
                className="newsContent"
                dangerouslySetInnerHTML={{ __html: news.description }}
              />
              <p className="mediaOutlet">{formatData(news.pubDate)}</p>
              <a href={news.originallink} target="_blank" className="goToLink">
                링크 여기있따.
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
