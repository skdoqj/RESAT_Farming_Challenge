import * as S from "../styles/carouselStyle";
import { useEffect, useState } from "react";
// import { styled, keyframes } from "styled-components";

function Carousel() {
  const withSize = 500;
  const SLIDES = 3;
  const [translatePX, setTranslatePX] = useState(0);
  const [curruntIdx, setCurrentIdx] = useState(0);

  const move = (n: number) => {
    if (n > 0) {
      //next
      if (curruntIdx < SLIDES - 1) {
        setCurrentIdx(curruntIdx + 1);
        setTranslatePX(translatePX - withSize);
      }
    } else {
      //prev
      if (curruntIdx > 0) {
        setTranslatePX(translatePX + withSize);
        setCurrentIdx(curruntIdx - 1);
      }
    }
  };

  let buttonArray = [];
  for (let i = 0; i < SLIDES; i++) {
    buttonArray.push(
      <button
        key={i}
        className="button"
        onClick={() => setTranslatePX(-withSize * i)}
      ></button>
    );
  }

  return (
    <S.Body>
      <h1>Carousel Slide</h1>
      <S.Carousel $withSize={withSize} $translatePX={translatePX}>
        <div className="img_container">
          <div className="img_card">
            1<img></img>
          </div>
          <div className="img_card">2</div>
          <div className="img_card">3</div>
        </div>
        <S.Buttons>{buttonArray}</S.Buttons>
      </S.Carousel>
      <S.ArrowButton>
        <button className="arrow prev" onClick={() => move(-1)}></button>
        <button className="arrow next" onClick={() => move(1)}></button>
      </S.ArrowButton>
    </S.Body>
  );
}
export default Carousel;
