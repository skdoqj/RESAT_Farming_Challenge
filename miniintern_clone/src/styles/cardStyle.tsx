import { styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";

export const ImageCard = styled.div`
  .card_wrapper {
    width: 216px;
    border-radius: 5px;
    box-shadow: rgba(26, 27, 28, 0.187) 0px 4px 8px 0px;
  }
  .top_img {
    height: 162px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }
  .top_img img {
    width: 100%;
  }

  .bottom {
    padding: 15px;
    line-height: 1.4;
  }
  .main_text {
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const LogoCard = styled.div`
  .card_wrapper {
    width: 456px;
    height: 122px;
    border-radius: 5px;
    box-shadow: rgba(26, 27, 28, 0.187) 0px 4px 8px 0px;
    display: flex;
    padding: 12px;
    position: relative;
  }
  .left_logo {
    position: relative;
    overflow: hidden;
  }
  .left_logo img {
    height: 90%;
  }
  .right {
    padding-left: 10px;
  }
  /* 텍스트 */
  .text_container div {
    margin-bottom: 0.5rem;
  }
  .part {
    font-size: 0.8rem;
    font-weight: 400;
    color: gray;
  }
  .main_text {
    font-size: 0.97rem;
    font-weight: 800;
  }
  .company {
    font-size: 0.9rem;
    font-weight: 700;
  }
  .tag_wrapper {
    display: flex;
    padding-top: 5px;
  }
  .tag {
    background-color: rgb(241, 249, 255);
    font-size: 0.8rem;
    font-weight: 500;
    color: ${themeColor};
    border-radius: 5px;
    padding: 2px 5px;
  }
  .heart {
    background-color: rgb(216, 216, 216);
    border-radius: 3px;
    height: 22px;
    width: 22px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
  }
`;
