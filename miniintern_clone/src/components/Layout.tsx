import { Outlet } from "react-router-dom";
import * as S from "../styles/styles";

function Layout() {
  return (
    <>
      <S.Header>
        <header>
          <div className="logo">
            <a href="/">miniintern</a>
          </div>
          <ul>
            <li>
              <a href="https://github.com/skdoqj/RESAT_Farming_Challenge">
                1일차
              </a>
            </li>
            <li>
              <a href="/">2일차</a>
            </li>
            <li>
              <a href="/timer">3일차 타이머</a>
            </li>
            <li>
              <a href="/todo">4일차 투두</a>
            </li>
            <li>5일차</li>
          </ul>
          <div className="right_container">
            <div>서비스 소개</div>
            <div className="sign_in">회원가입</div>
            <div className="log_in">로그인</div>
          </div>
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
