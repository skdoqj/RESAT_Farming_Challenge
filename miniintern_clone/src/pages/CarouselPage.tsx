import * as S from "../styles/carouselStyle";

import Carousel from "../components/Caraousel";

function CarouselPage() {
  const carouselSize = { withSize: 400, heightSize: 300 };
  const carouselInfo = [{ img: "sd", text: "sdasd" }];

  return (
    <S.Body>
      <h1>Carousel Slide</h1>
      <Carousel
        withSize={carouselSize.withSize}
        heightSize={carouselSize.heightSize}
        carouselInfo={carouselInfo}
      ></Carousel>
    </S.Body>
  );
}
export default CarouselPage;
