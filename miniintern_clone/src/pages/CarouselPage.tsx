import * as S from "../styles/carouselStyle";

import Carousel from "../components/Caraousel";

function CarouselPage() {
  const carouselSize = { withSize: 400, heightSize: 300 };
  const carouselInfo = [
    {
      text: "30대 비전공자의 개발자 커리어 전환기",
      img: "https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000",
    },
    {
      text: "40대 비전공자의 개발자 커리어 전환기",
      img: "https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000",
    },
    {
      text: "50대 비전공자의 개발자 커리어 전환기",
      img: "https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000",
    },
  ];

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
