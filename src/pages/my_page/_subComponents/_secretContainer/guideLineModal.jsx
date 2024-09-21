import '../../_styles/guideLineModal.css';

export default function GuideLineModal({ handleCloseGuideLineModal }) {
  return (
    <div className="guideLineModalCon">
      <p className="guideLineTitle">가이드라인</p>
      <i
        className="fa-solid fa-xmark guideLine_x_mark"
        onClick={handleCloseGuideLineModal}
      ></i>
      <div className="guideLineModalWrap">
        <p className="guideLineSubTitle">증거 수집이 중요한 이유는?</p>
        <div className="guideLineItem">
          <p>[증거 수집의 효과] 보러 가기</p>
          <img src="/assets/images/modal_arrow_right.png" alt="오른쪽 화살표" />
        </div>
        <div className="guideLineModalContent">
          <p className="guideLineSubTitle">
            효과적인 증거 수집 방법을 확인해보자
          </p>
          <div className="guideLineItem">
            <p>[사진]으로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="guideLineItem">
            <p>[동영상]으로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="guideLineItem">
            <p>[녹음]으로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="guideLineItem">
            <p>[글]로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
