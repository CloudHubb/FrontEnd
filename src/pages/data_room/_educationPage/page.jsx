import { useState } from 'react';
import Section1 from '../../home/_components/Section1';
import Section2 from '../../home/_components/Section2';
import Section3 from './_components/Section3';
import EducationDetailPage from './_components/EducationDetailPage';

export default function EducationPage() {
  // Todo: 선택한 교육자료 카드 id에 따라서 Section3를 EducationDetailPage로 바꾸기
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <Section1 />
      <Section2 />
      {selectedCard === null ? (
        <Section3 setSelectedCard={setSelectedCard} />
      ) : (
        <EducationDetailPage selectedCard={selectedCard} />
      )}
    </>
  );
}
