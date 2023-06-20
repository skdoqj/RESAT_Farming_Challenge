import * as S from "../styles/cardStyle";

function ImageCard() {
  return (
    <S.ImageCard>
      <div className="card_wrapper">
        <div className="top_img">
          <img
            className="cardImg"
            src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35850/c01b2e9e-7d99-4ae4-8b20-33999cd81216/%EC%A0%9C%EB%8B%88%EB%9F%AD%EC%8A%A4%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80.png"
          ></img>
        </div>
        <div className="bottom">
          <div className="tag"></div>
          <div className="main_text">
            동남아시아 시장에 마이크로니들패치 판매를 위한 '활용 가능한'
          </div>
        </div>
      </div>
    </S.ImageCard>
  );
}

function LogoCard() {
  return (
    <S.LogoCard>
      <div className="card_wrapper">
        <div className="left_logo">
          <img
            className="logo"
            src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png"
          ></img>
        </div>
        <div className="right">
          <div className="text_container">
            <div className="part">기획비즈니스</div>
            <div className="main_text">기술혁신사업부 서비스 기획자</div>
            <div className="company">(주)오픈놀</div>
            <div className="tag_wrapper">
              <div className="tag">정규직</div>
            </div>
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </S.LogoCard>
  );
}

export { ImageCard, LogoCard };
