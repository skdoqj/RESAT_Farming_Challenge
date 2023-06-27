import { styled, keyframes } from "styled-components";
const themeColor = "rgb(23, 161, 255)";

interface Props {
  $withSize: number;
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
  width: 500px;
  height: 400px;
  margin: 0 auto;

  .img_container {
    width: ${(props) => props.$withSize * props.$SLIDES}px;
    transform: translate(${(props) => props.$translatePX}px);
    /* animation: ${translate} 0.5s; */
  }

  .img_card {
    width: ${(props) => props.$withSize}px;
    height: 400px;
    float: left;
    font-size: 100px;
    color: white;
    background-color: orange;
  }

  img {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  position: relative;
  bottom: 8%;
  .button {
    width: 15px;
    height: 15px;
    border-radius: 30px;
    background-color: #ffffff86;
    margin: 0 5px;
    z-index: 1;
    cursor: pointer;
  }
  .active {
    background-color: #ffffff;
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
