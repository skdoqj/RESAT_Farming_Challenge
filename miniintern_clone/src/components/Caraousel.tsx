import * as S from "../styles/carouselStyle";
import { useCarousel } from "../components/Hooks/useCarousel";
interface Props {
  withSize: number;
  heightSize: number;
  carouselInfo: Info[];
}
interface Info {
  img: string;
  text: string;
}

function Carousel({ withSize, heightSize, carouselInfo }: Props) {
  const SLIDES = document.getElementsByClassName("img_card").length;
  let { curruntIdx, translatePX, buttonArray, move } = useCarousel({
    withSize,
    heightSize,
    SLIDES,
  });

  return (
    <>
      <S.Carousel
        $withSize={withSize}
        $SLIDES={SLIDES}
        $curruntIdx={curruntIdx}
        $translatePX={translatePX}
        $heightSize={heightSize}
      >
        <div className="img_container">
          {carouselInfo.map((v) => (
            <div className="img_card">
              <img src={v.img}></img>
              <div className="text">{v.text}</div>
            </div>
          ))}
        </div>
        <S.Buttons>{buttonArray}</S.Buttons>
      </S.Carousel>
      <S.ArrowButton>
        <button className="arrow prev" onClick={() => move(-1)}></button>
        <button className="arrow next" onClick={() => move(1)}></button>
      </S.ArrowButton>
    </>
  );
}
export default Carousel;
