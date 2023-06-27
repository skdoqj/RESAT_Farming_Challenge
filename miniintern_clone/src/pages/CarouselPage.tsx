import * as S from "../styles/carouselStyle";
import { useEffect, useState } from "react";
// import { styled, keyframes } from "styled-components";

function Carousel() {
  const withSize = 500;
  const SLIDES = document.getElementsByClassName("img_card").length;

  const [curruntIdx, setCurrentIdx] = useState(0);
  const [translatePX, setTranslatePX] = useState(0);

  console.log("curruntIdx", curruntIdx);

  const move = (n: number) => {
    if (n > 0) {
      //next
      if (curruntIdx >= SLIDES - 1) {
        setCurrentIdx(0);
      } else {
        setCurrentIdx(curruntIdx + 1);
      }
    } else {
      //prev
      if (curruntIdx === 0) {
        setCurrentIdx(SLIDES - 1);
      } else {
        setCurrentIdx(curruntIdx - 1);
      }
    }
  };

  let buttonArray = [];
  for (let i = 0; i < SLIDES; i++) {
    buttonArray.push(
      <button
        key={i}
        className={i === curruntIdx ? "button active" : "button"}
        onClick={() => {
          setCurrentIdx(i);
        }}
      ></button>
    );
  }

  // 화면 계산
  useEffect(() => {
    setTranslatePX(-curruntIdx * withSize);

    const interval = setInterval(
      () => setCurrentIdx(curruntIdx !== SLIDES - 1 ? curruntIdx + 1 : 0),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, [curruntIdx]);

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
