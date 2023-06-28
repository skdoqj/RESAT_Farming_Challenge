import { useEffect, useState } from "react";

interface Props {
  withSize: number;
  heightSize: number;
  SLIDES: number;
}
export function useCarousel({ withSize, heightSize, SLIDES }: Props) {
  const [curruntIdx, setCurrentIdx] = useState(0);
  const [translatePX, setTranslatePX] = useState(0);

  // console.log("curruntIdx", curruntIdx);

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
      2000
    );

    return () => {
      clearInterval(interval);
    };
  }, [curruntIdx]);

  return { curruntIdx, translatePX, buttonArray, move };
}
