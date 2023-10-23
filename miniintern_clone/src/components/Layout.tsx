import { Outlet } from "react-router-dom";
import * as S from "../styles/styles";
import { useEffect, useRef, useState } from "react";

function Layout() {
  const navRef = useRef<any>(null);
  const [openNav, setOpenNav] = useState(false);
  const [loginState, setLoginState] = useState(false);

  if (openNav) {
    const clickOut = (e: any) => {
      if (!navRef.current || !navRef.current.contains(e.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener("click", clickOut);
  }

  const logout = () => {
    localStorage.removeItem("login");
    setLoginState(false);
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("login") === null) {
      setLoginState(false);
    } else {
      setLoginState(true);
    }
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <header>
            <div className="logo">
              <a href="/">miniintern</a>
            </div>
            <S.Nav $openNav ref={navRef}>
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
                  {loginState ? (
                    <div className="logout" onClick={logout}>
                      로그아웃
                    </div>
                  ) : (
                    <>
                      <div className="signin">회원가입</div>
                      <div className="login">
                        <a href="/login">로그인</a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </S.Nav>
          </header>
        </S.Header>

        <Outlet />
      </S.Wrapper>
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
