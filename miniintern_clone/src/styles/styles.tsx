import { createGlobalStyle, styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";
const grayColor = "#cccccc";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    border:0;
    box-sizing:0;
}
body {
    text-align: center;
    font-weight: 100; 
}
a {
    color: inherit;
    text-decoration: none;
}

li{
    list-style: none;
}
.default_btn {
    font-size: 14px;
    background-color: white;
    margin-left: 10px;
    padding: 3px 5px;
    border: 1px solid ${grayColor};
    border-radius: 5px;
}
.default_input {
      margin-left: 10px;
      border: none;
      border-bottom: 1px solid ${grayColor};
      height: 30px;
      width: 200px;
      text-indent: 10px;
      outline: none;
    }
`;
export const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  .outlet {
    padding-top: 60px;
  }
`;
export const Header = styled.div`
  height: 60px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(104, 104, 104, 0.1);
  font-size: 16px;
  align-items: center;
  z-index: 3;

  .logo {
    /* position: absolute; */
    /* left: 10px; */
    font-size: 30px;
    font-weight: 700;
    padding: 0 10px 0 10px;
  }
`;

export const Nav = styled.div<{ $openNav: boolean }>`
  right: 0%;
  background-color: red;
  /* display: flex; */

  .nav {
    display: grid;
    position: absolute;
    top: 0;
    grid-template-columns: 1fr 1fr;
    white-space: nowrap;
    height: 40px;
  }
  .hamburger .x_button {
    display: none;
  }

  ul {
    display: flex;
    height: 100%;
    padding-left: 20px;
  }
  li {
    padding: 20px;
  }

  .right_container {
    position: relative;

    font-weight: 400;
    float: right;
    margin-left: auto;
    display: flex;
  }
  .right_container > div {
    padding: 20px;
  }
  .signin,
  .login,
  .logout {
    color: ${themeColor};
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    .nav_button {
      display: inline;
      position: absolute;
      top: 12px;
      cursor: pointer;
      z-index: 2;
      background-color: transparent;
      width: 56px;
      height: 35px;
      right: 10%;
    }
    .x_button {
      padding-right: 3%;

      .line {
        position: relative;
        display: inline-block;
        height: 25px;
        width: 2px;
      }
      .line:nth-child(1) {
        background-color: #2b2b2b;
        transform: rotate(45deg);
      }
      .line:nth-child(2) {
        background-color: #2b2b2b;
        transform: rotate(135deg);
        left: -1.5px;
      }
    }

    .hamburger {
      .line {
        background: #2b2b2b;
        margin-top: 4px;
        margin-bottom: 4px;
        width: 23px;
        height: 2px;
        border-radius: 2px;
      }
    }
    .nav {
      display: none;
    }
    .opne_nave {
      display: inline-flex;
      position: fixed;
      background-color: white;
      z-index: 1;
      right: 0%;
      width: 250px;
      height: 100vh;
      text-align: left;
      padding-left: 20px;
      top: 0%;

      box-shadow: -10px 0 15px 0 rgba(0, 0, 0, 0.2);

      ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 2;
        top: 50px;
        left: 10%;
        padding: 0;
      }

      .right_container {
        position: absolute;
        display: flex;
        flex-direction: column;
        font-weight: 400;
        top: 400px;
        left: 10%;
        padding: 0;
        z-index: 3;
      }
    }
  }
`;

export const Footer = styled.div`
  height: 10rem;
  width: 100vw;
  padding-top: 20px;
  border-top: 1px solid rgba(104, 104, 104, 0.1);

  footer .name {
    font-size: 30px;
    font-weight: 300;
  }

  footer .email {
    font-weight: 400;
  }
  footer img {
    height: 50px;
  }
`;
