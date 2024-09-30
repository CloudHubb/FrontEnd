import { useState } from 'react';

// Components
import TitleToggle from './_components/TitleToggle';
import BoardTitleWrapper from './_components/BoardTitle';

// Styles
import './_styles/boardWrite.css';

export default function BoardWrite() {
  const [isAnonyClick, setIsAnonyClick] = useState(false);
  const [anonyClassName, setAnonyClassName] = useState('anonymityButton');

  const handleAnonyClick = () => {
    setIsAnonyClick((prevClick) => {
      setAnonyClassName(prevClick ? 'anonymityButton' : 'clickAnonymityButton');
      return !prevClick;
    });
  };

  return (
    <>
      <div className="boardWriteWrapper">
        <TitleToggle />
        <BoardTitleWrapper type={'write'} />
        <textarea
          id="enterContentBox"
          placeholder="내용을 입력하세요."
        ></textarea>
        <div className="boardWriteBottomSection">
          <div
            className={anonyClassName}
            onClick={() => {
              handleAnonyClick(isAnonyClick);
            }}
          >
            익명
          </div>
          <div id="writeDoneButton">완료</div>
        </div>
      </div>
    </>
  );
}
