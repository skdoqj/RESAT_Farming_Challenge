import { styled, keyframes } from "styled-components";
const themeColor = "rgb(23, 161, 255)";

interface Props {
  $withSize: number;
  $heightSize: number;
  $SLIDES: number;
  $curruntIdx: number;
  $translatePX: number;
}
const translate = keyframes`
     to {
      transform: translate(0px);
    }
  `;

// const imgMargin = 50;
export const Body = styled.div`
  width: 800px;
  margin: 50px auto;
  position: relative;

  h1 {
    margin-bottom: 20px;
  }
`;
export const Carousel = styled.div<Props>`
  overflow: hidden;
  width: ${(props) => props.$withSize}px;
  height: ${(props) => props.$heightSize}px;
  margin: 0 auto;
  border-radius: 15px;
  position: relative;

  .img_container {
    width: ${(props) => props.$withSize * props.$SLIDES}px;
    transform: translate(${(props) => props.$translatePX}px);
    position: relative;
    /* animation: ${translate} 0.5s; */
  }

  .img_card {
    width: ${(props) => props.$withSize}px;
    height: ${(props) => props.$heightSize}px;
    float: left;
    font-size: 100px;
    color: white;
  }

  img {
    width: ${(props) => props.$withSize}px;
    height: ${(props) => props.$heightSize}px;
    //이미지 비율 유지
    object-fit: cover;
  }
  .text {
    z-index: 1;
    font-size: 2rem;
    color: black;
    position: absolute;
    top: 80px;
    width: 220px;
    padding-left: 20px;
    font-weight: 800;
    word-break: keep-all;
    text-align: left;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  .button {
    width: 12px;
    height: 12px;
    border-radius: 30px;
    background-color: #6363633e;
    margin: 0 5px;
    z-index: 1;
    cursor: pointer;
  }
  .active {
    background-color: ${themeColor};
  }
`;
export const ArrowButton = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;

  .arrow {
    position: relative;
    width: 40px;
    height: 40px;
    font-size: 0px;
    border: 5px solid ${themeColor};
    background-color: rgba(255, 255, 255, 0);
    border-width: 0 5px 5px 0;
    z-index: 1;
    cursor: pointer;
  }
  .prev {
    transform: translate(-50%, -50%) rotate(135deg);
    left: -30%;
  }
  .next {
    transform: translate(-50%, -50%) rotate(-45deg);
    right: -35%;
  }
`;
