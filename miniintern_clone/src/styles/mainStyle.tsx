import { styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";

export const Main = styled.div`
  width: 936px;
  margin: auto;
  text-align: left;

  section {
    padding-top: 40px;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .text_bottom {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .go {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${themeColor};
  }
`;

export const Banner = styled.div`
  //head
  .head {
    display: flex;
    justify-content: space-between;
  }
  .top_banner {
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    height: 400px;
  }
  .top_banner img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .left_banner {
    width: 65%;
  }
  .right_banner {
    width: 32%;
  }
  .top_banner_text {
    margin: 40px;
    color: white;
    font-size: 2rem;
    font-weight: 400;
  }
  .top_banner_text p {
    margin-bottom: 9px;
  }
  .top_banner_text span {
    font-size: 0.9rem;
    margin-top: auto;
    bottom: 30px;
    position: absolute;
  }
  .top_banner_text > .sub {
    font-size: 1.5rem;
  }

  //중간 배너
  .banner_container {
    display: flex;
    margin-top: 20px;
  }
  .background {
    background-color: rgb(240, 243, 243);
    height: 230px;
    width: auto;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
  }
  .slide_banner .banner {
    width: 335px;
    height: 250px;
    background-color: green;
    border-radius: 15px;
  }
  .slide_banner .text_box {
    padding-top: 70px;
    padding-left: 30px;
    position: relative;
  }
  .slide_banner .text_box span {
    position: absolute;
    top: 20px;
    left: 0px;
    background-color: ${themeColor};
    color: white;
    padding: 10px 25px 10px 30px;
    font-weight: 800;
    font-size: 0.8rem;
    border-radius: 0 20px 20px 0;
  }
  .slide_banner .text_box .title {
    font-size: 1.1rem;
    font-weight: 400;
    color: gray;
    margin-bottom: 10px;
  }
  .slide_banner .text_box .sub {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 30px;
  }

  //하단배너
  .bottom_banner .banner {
    position: relative;
    width: 100%;
    height: 120px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .bottom_banner .banner img {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .bottom_banner .banner_text {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .bottom_banner button {
    padding: 15px 20px;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.25);
    color: white;
    border-radius: 30px;
  }
`;

export const CardSpace = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const LogoCardSpace = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
