import { useLocation, useNavigate } from 'react-router-dom';

import '../../_styles/writingSecretItemPage.css';
// import { useState } from 'react';

export default function WritingSecretItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardName } = location.state || {}; // selectedIndex

  const handleUploadBtn = (e) => {
    console.log('완료버튼 클릭', e);

    // TODO: 사진만 올리고 싶을 수도 있지 않은가? -> 아무것도 없을 경우에만 경고창 띄우기
    alert('글을 작성한 후 완료 버튼을 눌러주세요.');
  };

  // TODO: 이미지, 녹음, 동영상, PDF 등을 다 불러올 수 있는지, Preview는 이미지만 보여줄 것인지
  // TODO: 글자수 제한 걸어둘 것인지
  // 받아온 파일 데이터 보관
  // const [files, setFiles] = useState([]);
  // const [previewFiles, setPreviewFiles] = useState([]);
  // const handleFileChange = (e) => {
  //   setFiles(Array.from(e.target.files));
  // };

  // const uploadFiles = (e) => {
  //   e.preventDefault();
  //   const fileReader = new FileReader();
  //   files.map((file) => {
  //     fileReader.append('file 추가', file);
  //   });
  //   console.log(Array.from(FileReader));

  //   // TODO: API 붙여서 서버로 데이터 보내기
  // };

  return (
    <section>
      <div className="secretCardPasswordTitle">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <p>{cardName}</p>
        <span></span>
      </div>
      <div className="secretItemTitleInput">
        <input
          type="text"
          placeholder="제목을 입력하세요."
          // onChange={handleFileChange}
        />
      </div>
      <div className="secretItemContentCon">
        <textarea
          name="secretItemArea"
          id="secretItemArea"
          className="secretItemArea"
          placeholder="내용을 입력하세요."
        ></textarea>
        <div className="guidLineContent">가이드라인 들어갈 자리</div>
      </div>
      <div className="secretItemControlCon">
        <div className="guideLind_clip">
          <button className="secretItemGuideLineBtn">가이드라인</button>
          <button
            className="attachmentBtn"
            // onClick={uploadFiles}
          >
            <i className="fa-solid fa-paperclip"></i>
          </button>
        </div>
        <button className="uploadSecretItemBtn" onClick={handleUploadBtn}>
          완료
        </button>
      </div>
    </section>
  );
}
