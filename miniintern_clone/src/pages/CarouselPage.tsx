import * as S from "../styles/carouselStyle";
import { useEffect, useState } from "react";
import { useCarousel } from "../components/Hooks/useCarousel";

function Carousel() {
  const withSize = 400;
  const heightSize = 300;
  const SLIDES = document.getElementsByClassName("img_card").length;

  let { curruntIdx, translatePX, buttonArray, move } = useCarousel({
    withSize,
    heightSize,
    SLIDES,
  });

  return (
    <S.Body>
      <h1>Carousel Slide</h1>
      <S.Carousel
        $withSize={withSize}
        $SLIDES={SLIDES}
        $curruntIdx={curruntIdx}
        $translatePX={translatePX}
      >
        <div className="img_container">
          <div className="img_card">
            1<img></img>
          </div>
          <div className="img_card">2</div>
          <div className="img_card">3</div>
          <div className="img_card">4</div>
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
