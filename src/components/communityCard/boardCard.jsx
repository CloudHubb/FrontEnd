import { Link } from 'react-router-dom';

// Styles
import '../communityCard/boardCard.css';

// Components
import BoardInfo from '../../pages/community/_components/boardInfo';

export default function boardCard({ boardId }) {
  return (
    <>
      <Link to={`/board/${boardId}`}>
        <div className="boardCardWrapper">
          <p>오늘 상담 받았어요.</p>
          <p>
            민사 소송이란, 넓은 의미에서 개인 간의 권리를 확정하여 개인의 권리를
            보호하고 사법민사 소송이란, 넓은 의미에서 개인 간의 권리를 확정하여
            개인의 권리를 보호하고 사법...
          </p>
          <BoardInfo type={'main'} />
        </div>
      </Link>
    </>
  );
}
