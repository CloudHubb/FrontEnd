// Styles
import './_styles/boardDetail.css';

// Assets
import TitleWrapper from './_components/titleToggle';
import BoardTitle from './_components/boardTitle';
import BoardInfo from './_components/boardInfo';

export default function boardDetail() {
  return (
    <>
      <div className="boardDetailWrapper">
        <TitleWrapper />
        <BoardTitle type={'detail'} />
        <BoardInfo type={'detail'} />
      </div>
    </>
  );
}
