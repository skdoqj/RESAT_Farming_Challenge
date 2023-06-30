import { styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";

export const LoginForm = styled.form`
  padding-bottom: 100px;

  h1 {
    color: ${themeColor};
    padding: 30px;
  }

  .input_wrap {
    display: block;
  }
  input {
    width: 300px;
    height: 40px;
    border: 1px solid #cccccc;
    display: block;
    margin: 0 auto;
    position: relative;
    text-indent: 15px;
  }

  input:nth-child(1) {
    border-radius: 6px 6px 0 0;
  }
  input:nth-child(2) {
    border-radius: 0 0 6px 6px;
    top: -1px;
  }

  .messge {
    width: 300px;
    height: 20px;
    margin: 0 auto;
    padding-top: 10px;
    color: ${themeColor};
    font-weight: 400;
    text-align: left;
    padding-left: 25px;
  }
  button {
    background-color: ${themeColor};
    color: white;

    width: 302px;
    height: 42px;
    border-radius: 6px;
    margin-top: 10px;
  }

  .find_wrap {
    margin-top: 20px;
    span {
      margin: 10px;
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;
