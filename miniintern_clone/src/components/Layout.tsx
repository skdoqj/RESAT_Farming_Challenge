import { Outlet } from "react-router-dom";
import * as S from "../styles/styles";
import { useState } from "react";

function Layout() {
  const [openNav, setOpenNav] = useState(false);

  console.log(openNav);
  return (
    <>
      <S.Header>
        <header>
          <div className="logo">
            <a href="/">miniintern</a>
          </div>
          <S.Nav $openNav>
            <button
              className={
                openNav ? "nav_button x_button" : "nav_button hamburger"
              }
              onClick={() => setOpenNav((prev) => !prev)}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
            <div className={openNav ? "opne_nave" : "nav"}>
              <ul>
                <li>
                  <a href="https://github.com/skdoqj/RESAT_Farming_Challenge">
                    Github
                  </a>
                </li>
                <li>
                  <a href="/timer">타이머</a>
                </li>
                <li>
                  <a href="/todo">투두</a>
                </li>
                <li>
                  <a href="/calender">캘린더</a>
                </li>
                <li>
                  <a href="/carousel">슬라이드</a>
                </li>
              </ul>
              <div className="right_container">
                <div>서비스 소개</div>
                <div className="sign_in">회원가입</div>
                <div className="log_in">로그인</div>
              </div>
            </div>
          </S.Nav>
        </header>
      </S.Header>

      <Outlet />
      <S.Footer>
        <footer>
          <div className="name">SUWAN</div>
          <a href="https://github.com/skdoqj/RESAT_Farming_Challenge">
            <img src="https://velog.velcdn.com/images/persestitan/post/5ef6f63a-c279-465d-b65d-97ff39848f6c/image.jpeg" />
          </a>
          <div className="email">Email: skdoqj@gmail.com</div>
        </footer>
      </S.Footer>
    </>
  );
}
export default Layout;
