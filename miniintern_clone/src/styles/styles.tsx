import { createGlobalStyle, styled } from "styled-components";

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
`;

export const Header = styled.div`
  height: 60px;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(104, 104, 104, 0.1);
  font-size: 16px;
  .nav {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 30px;
    font-weight: 700;
    padding: 0 10px 0 10px;
  }
  ul {
    display: flex;
    height: 100%;
    padding-left: 20px;
  }
  li {
    padding: 5px;
  }

  .right_container {
    position: relative;
    margin-left: auto;
    padding-right: 20px;
    font-weight: 400;
    display: inline-flex;
    justify-content: flex-end;
  }
  .right_container > div {
    padding: 10px;
  }
`;

export const Footer = styled.div`
  bottom: 0;
  height: 200px;
  border-top: 1px solid rgba(104, 104, 104, 0.1);

  footer {
    padding: 20px;
  }
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
