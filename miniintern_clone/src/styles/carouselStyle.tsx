import { styled, keyframes } from "styled-components";
const themeColor = "rgb(23, 161, 255)";

interface Props {
  $withSize: number;
  $translatePX: number;
}
const translate = keyframes`
     to {
      transform: translate(0px);
    }
  `;

export const Carousel = styled.div<Props>`
  overflow: hidden;
  .slide_wrapper {
  }
  .img_container {
    width: ${(props) => props.$withSize * 3}px;
    transform: translate(${(props) => props.$translatePX}px);
    /* animation: ${translate} 0.5s; */
  }

  .img_card {
    width: ${(props) => props.$withSize}px;
    height: 400px;
    float: left;
    font-size: 100px;
    color: white;
  }
  .img_card:nth-child(1) {
    background-color: orange;
  }
  .img_card:nth-child(2) {
    background-color: blue;
  }
  .img_card:nth-child(3) {
    background-color: red;
  }
`;
