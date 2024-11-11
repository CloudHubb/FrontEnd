import PropTypes from 'prop-types';
import { useState } from 'react';

// Styles
import '../../_styles/guideLineModal.css';

export default function GuideLineModal({ handleCloseGuideLineModal }) {
  const [renderType, setRenderType] = useState('default');
  const handleRenderType = (type) => {
    switch (type) {
      case 'effect':
        return renderGatherEvidenceEffect();
      case 'photo':
        return renderGatherPhotoEvidence();
      case 'voice':
        return renderGatherVoiceEvidence();
      case 'medical':
        return renderGatherMedicalEvidence();
      case 'writing':
        return renderGatherWritingEvidence();
      default:
        return renderDefault();
    }
  };

  // 증거 수집 효과
  const renderGatherEvidenceEffect = () => {
    return (
      <div className="evidenceWrapper">
        <p>[ 증거 수집의 효과 ]</p>
        <div className="evidenceEffectContent">
          <p>
            <br />
            피해자가 사건을 처리하는 데 있어 증거 수집은 매우 중요한 요소입니다.
          </p>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              1. 사건의 확실한 입증
            </p>
            <p className="evidenceContentText">
              데이트 폭력 사건은 많은 경우 사적인 공간에서 발생하여 직접적인
              증거가 부족할 수 있습니다. &nbsp;따라서{' '}
              <span>피해자의 진술은 가장 중요한 증거로 작용</span>하며, 결정적인
              직접 증거가 됩니다. <br />
              피해자가 경험한 내용을 구체적으로 기록하고, 가능한 모든 증거를
              수집하는 것이 사건을 입증하는 데 필수적입니다.
              <br />
              <br />
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">2. 법적 절차의 원활한 진행</p>
            <p className="evidenceContentText">
              사건이 법원에서 진행될 경우, 수집된 증거는 피해자의 입장을
              뒷받침하고, 권리를 확립하는 데 도움을 줍니다. 이를 통해 피해자는
              더 나은 공격력과 방어력을 가질 수 있습니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentText">
              <br />
              명확한 증거 수집은 피해자가 법적으로 보호받을 수 있는 길이 됩니다.
              응급 상황에서 준비된 문서와 기록은 <span>매우 중요한 역할</span>을
              하며, 피해자는 항상 필요한 자료를 누적하는 데 노력을 기울여야
              합니다.
            </p>
            {/* &apos;다락방&apos;은 원활한 증거 수집을 위해 비밀창고를 제공하고
            있습니다! 안전하게 증거들을 수집하고 보호하세요! */}
          </div>
        </div>
      </div>
    );
  };
  const handleEvidenceEffectClick = () => {
    setRenderType('effect');
  };

  /*사진으로 증거 수집하기*/
  const handlePhotoEvidenceClick = () => {
    setRenderType('photo');
  };
  const renderGatherPhotoEvidence = () => {
    return (
      <div className="evidenceWrapper">
        <p>[ 사진 및 동영상 ] 으로 증거 수집하기</p>
        <div className="evidenceEffectContent">
          <p>
            <br />
            피해 사실을 나타낼 수 있는 사진 증거는 반복해서 설명하는 것보다 훨씬
            도움이 될 수 있습니다.
          </p>
          <div className="evidenceContent">
            <p className="evidenceContentText">
              <br />
              사진 증거를 다음과 같이 확보해보세요.
            </p>
          </div>
          <div className="evidenceContentText">
            ※ 스마트폰으로 촬영하게 되면,
            <span>&nbsp;날짜 / 시간 / 장소</span>를{' '}
            <span>&nbsp;자동으로 기록</span>할 수 있습니다.
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              1. 피해 신체 부위 사진 및 동영상 촬영
            </p>
            <p className="evidenceContentText">
              피해 신체 부위를 찍을 때 꼭 기억해야 할 점이 있습니다. 바로{' '}
              <span>피해자의 몸에 있는 상처</span> 라는 것을 증명할 수 있어야
              합니다.
              <br />
              즉, 이 사건의 피해자가 여러분이라는 것을 증명할 수 있어야 한다는
              것입니다. 그렇기 때문에 <span>얼굴이 함께 나오도록 촬영</span>하는
              것이 도움 됩니다.
              <br /> <br />
              따라서 다친 신체 부위와 얼굴이 함께 찍힌 사진과 다친 부위만
              선명하게 따로 찍은 사진을 <span>최소한 2장 이상</span> 준비하세요.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              2. 피해 장소 사진 및 동영상 촬영
            </p>
            <p className="evidenceContentText">
              피해 장소를 사진이나 동영상으로 촬영해두는 것도 좋은 방법입니다.
              피해 당시에 너무 정신이 없으므로 촬영이 힘들 수 있습니다. 하지만,
              만약에 피해 장소가 여러분의 집, 직장 등으로
              <br />
              <span> 촬영하기 수월한 장소</span>라면 사진이나 동영상을 촬영하고
              보관해두세요.
              <br />
            </p>
          </div>{' '}
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              하지만, 피해자가 당시의 피해 장소에 다시 방문한다는 것만으로도 큰
              고통이 될 수 있기 때문에 다시 촬영하기 힘들다면 하지 마세요.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // 녹음으로 증거 수집하기
  const handleVoiceEvidenceClick = () => {
    setRenderType('voice');
  };
  const renderGatherVoiceEvidence = () => {
    return (
      <div className="evidenceWrapper">
        <p>[ 녹음 ] 으로 증거 수집하기</p>
        <div className="evidenceEffectContent">
          <p>
            <br />
            외관적 피해가 드러나지 않는 언어폭력의 경우, 폭언이 오랜 시간
            지속적으로 이어졌다는 것을 증명하기에 녹취록은 좋은 증거가 될 수
            있습니다.
          </p>
          <div className="evidenceContent">
            <p className="evidenceContentText">
              <br />
              녹취 증거를 다음과 같이 확보해보세요.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              1. 가급적 조용한 곳에서 스마트폰을 이용
            </p>
            <p className="evidenceContentText">
              스마트폰을 이용해서 <span>최대한 조용한 곳</span>에서 녹취를
              진행하는 것이 중요합니다. 그리고, 상황이 된다면 주머니에 넣지 않고
              <br />
              <span>좋은 음질로 정확하게</span> 녹취하는 것이 중요합니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              2. 녹음 횟수는 여러 번, 자주 기록
            </p>
            <p className="evidenceContentText">
              욕설, 모욕 등의 폭언은 다투는 과정에서 일어난 일시적 발언으로는
              증거로서 인정받기 쉽지 않습니다.
              <br />
              따라서, 폭언이 오랜 시간 지속적으로 이어졌다는 것을 증명하기 위해
              <span>자주, 여러 번 기록</span>하는 것이 중요합니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              3. 가해자의 직접 자백이 포함되도록 기록
            </p>
            <p className="evidenceContentText">
              가해자와 통화한 녹음 내용, 피해 상황에 대해 잘못을 인정하는 내용
              또한 중요한 증거에 해당합니다.
              <br />
              그렇기 때문에, 녹취 시 <span>구체적으로</span> 가해자가&nbsp;
              <span>언제 무슨 행동을 어떻게 했는 지</span> 포함되도록 녹취하는
              것이 중요합니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              피해자 본인이 대화에 참여한 녹취록일 경우, 불법 녹음 처벌 가능성이
              매우 낮아지니, 필요한 경우 녹취 기록을 남기는 것이 증거 수집에
              도움을 줍니다.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // 의료기록으로 증거 수집하기
  const handleMedicalEvidenceClick = () => {
    setRenderType('medical');
  };
  const renderGatherMedicalEvidence = () => {
    return (
      <div className="evidenceWrapper">
        <p>[ 의료기록 ] 으로 증거 수집하기</p>
        <div className="evidenceEffectContent">
          <p>
            <br />
            피해가 있고 난 후 바로 경찰 신고, 고소 등의 법적 조치를 취하지
            않더라도 의료기록은 피해의 정도를 나타내는 중요한 증거 자료가
            됩니다.
          </p>
          <div className="evidenceContent">
            <p className="evidenceContentText">
              <br />
              의료기록을 다음과 같이 확보해보세요.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              1. 병원 진단서 기록
            </p>
            <p className="evidenceContentText">
              피해가 있은 직후, 병원에 방문하여 <span>의사 소견서가 포함</span>
              된 병원 진단서를 증거 자료로 활용 가능합니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              2. 정신과 진료 기록
            </p>
            <p className="evidenceContentText">
              데이트폭력이나 성폭력 이후 정신과 진료를 받겠다고 결심했다면
              최대한 빨리 병원에 방문하여 진료 받는 것이 도움이 됩니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              병원에 방문하여 진료를 받았을 경우, 의료기록을 통해
              <span>&nbsp;피해의 정도</span>와&nbsp;
              <span>피해자의 상태를 회복</span>하는 데 도움을 주는 중요한 증거
              자료가 될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // 글로 증거 수집하기
  const handleWritingEvidenceClick = () => {
    setRenderType('writing');
  };
  const renderGatherWritingEvidence = () => {
    return (
      <div className="evidenceWrapper">
        <p>[ 글 ] 로 증거 수집하기</p>
        <div className="evidenceEffectContent">
          <p>
            <br />
            가해자의 가해 사실을 인정하는 톡, 문자는 사건에 있어서 중요한 증거
            자료가 됩니다.
          </p>
          <div className="evidenceContent">
            <p className="evidenceContentText">
              <br />
              글로 된 증거를 다음과 같이 확보해보세요.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              1. 구체적으로 가해자의 잘못이 포함
            </p>
            <p className="evidenceContentText">
              가해자가 <span>가해 사실을 인정</span>하는 톡이나 문자 등의 증거
              자료를 수집합니다.
              <br />
              예) 가해자에게 &apos;어제 사무실 입구에서 과장님이 제 (신체부위)
              만진 거 사과하세요.&apos; → &apos;만진 거 죄송합니다.&apos; &nbsp;
              와 같이 <span>명확하게 가해 사실이 드러나는 내용</span>을
              확보합니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              2. 일관된 내용의 기록을 모두 수집
            </p>
            <p className="evidenceContentText">
              메시지 / 메일 / 톡 의 경우, <span>일관된 내용의 기록을 모두</span>{' '}
              증거로 업로드할 때 좀 더 유용합니다.
            </p>
          </div>
          <div className="evidenceContent">
            <p className="evidenceContentTitle">
              <br />
              3. 피해 사실을 기록한 일기
            </p>
            <p className="evidenceContentText">
              피해자가 직접 피해 사실을 기록한 일기도 증거로 활용될 수 있습니다.
              이때, <span>날짜, 시간, 장소, 당시 상황, 본인의 감정을 기록</span>
              하고, 일관된 내용이더라도 <span>수시로 작성</span>하는 것이
              중요합니다.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderDefault = () => {
    return (
      <div className="guideLineModalWrap">
        <p className="guideLineSubTitle">증거 수집이 중요한 이유는?</p>
        <div className="guideLineItem" onClick={handleEvidenceEffectClick}>
          <p>[증거 수집의 효과] 보러 가기</p>
          <img src="/assets/images/modal_arrow_right.png" alt="오른쪽 화살표" />
        </div>
        <div className="guideLineModalContent">
          <p className="guideLineSubTitle">
            효과적인 증거 수집 방법을 확인해보자
          </p>
          <div className="guideLineItem" onClick={handlePhotoEvidenceClick}>
            <p>[사진 및 동영상] 으로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="guideLineItem" onClick={handleVoiceEvidenceClick}>
            <p>[녹음]으로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="guideLineItem" onClick={handleMedicalEvidenceClick}>
            <p>[의료 기록]으로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="guideLineItem" onClick={handleWritingEvidenceClick}>
            <p>[글]로 증거 수집하기</p>
            <img
              src="/assets/images/modal_arrow_right.png"
              alt="오른쪽 화살표"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="guideLineModalCon">
      {renderType !== 'default' ? (
        <p className="guideLineTitle__active">
          <img
            src="/public/arrow/modal_arrow_left.svg"
            alt="뒤로가기"
            onClick={() => {
              setRenderType('default');
            }}
          />
          가이드라인
        </p>
      ) : (
        <p className="guideLineTitle">가이드라인</p>
      )}

      <i
        className="fa-solid fa-xmark guideLine_x_mark"
        onClick={handleCloseGuideLineModal}
      ></i>
      {handleRenderType(renderType)}
    </div>
  );
}

GuideLineModal.propTypes = {
  handleCloseGuideLineModal: PropTypes.func.isRequired,
};
