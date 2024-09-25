import './_styles/boardWrite.css';

// Components
import TitleToggle from './_components/TitleToggle';
import BoardTitleWrapper from './_components/BoardTitle';

export default function boardWrite() {
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
          <div id="anonymityButton">익명</div>
          <div id="writeDoneButton">완료</div>
        </div>
      </div>
    </>
  );
}
