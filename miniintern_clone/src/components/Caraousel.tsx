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
      >
        <div className="img_container">
          <div className="img_card">
            <img></img>
            <div></div>
          </div>
          <div className="img_card">1</div>
          <div className="img_card">3</div>
          <div className="img_card">4</div>
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
