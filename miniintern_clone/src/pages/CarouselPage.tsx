// import * as S from "../styles/carouselStyle";
import { useState } from "react";
import { styled } from "styled-components";

function Carousel() {
  const withSize = 500;
  const [translatePX, setTranslatePX] = useState(0);

  const move = (n: number) => {
    if (n > 0) {
      setTranslatePX(translatePX - withSize);
    } else {
      setTranslatePX(translatePX + withSize);
    }
  };

  const Carousel = styled.div`
    overflow: hidden;
    .slide_wrapper {
    }
    .img_container {
      width: ${withSize * 3}px;
      transform: translate(${translatePX}px);
    }
    .img_card {
      width: ${withSize}px;
      height: 400px;
      float: left;
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

  return (
    <Carousel>
      <h1>Carousel Slide</h1>

      <div className="slide_wrapper">
        <div className="img_container">
          <div className="img_card"></div>
          <div className="img_card"></div>
          <div className="img_card"></div>
        </div>
        <button className="prev_button" onClick={() => move(-1)}>
          왼쪽
        </button>
        <button className="next_button" onClick={() => move(1)}>
          오른쪽
        </button>
        <div className="img_buttons">
          <button className="button1" onClick={() => setTranslatePX(0)}>
            버튼1
          </button>
          <button className="button1" onClick={() => setTranslatePX(-withSize)}>
            버튼2
          </button>
          <button
            className="button1"
            onClick={() => setTranslatePX(-withSize * 2)}
          >
            버튼3
          </button>
        </div>
      </div>
    </Carousel>
  );
}
export default Carousel;
