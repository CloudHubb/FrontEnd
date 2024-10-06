// Components
import Section1 from './_components/Section1';
import Section2 from './_components/Section2';
import Section3 from './_components/Section3';

// Styles
import './_styles/page.css';

export default function page() {
  return (
    <>
      <div className="diaryWrapper">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}
