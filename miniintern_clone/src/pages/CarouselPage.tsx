import * as S from "../styles/carouselStyle";
import { useState } from "react";
// import { styled, keyframes } from "styled-components";

function Carousel() {
  const withSize = 500;
  const [translatePX, setTranslatePX] = useState(0);

  console.log(translatePX);
  const move = (n: number) => {
    if (n > 0) {
      setTranslatePX(translatePX - withSize);
    } else {
      setTranslatePX(translatePX + withSize);
    }
  };

  return (
    <>
      <S.Carousel $withSize={withSize} $translatePX={translatePX}>
        <h1>Carousel Slide</h1>

        <div className="slide_wrapper">
          <div className="img_container">
            <div className="img_card">1</div>
            <div className="img_card">2</div>
            <div className="img_card">3</div>
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
            <button
              className="button1"
              onClick={() => setTranslatePX(-withSize)}
            >
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
      </S.Carousel>
    </>
  );
}
export default Carousel;
