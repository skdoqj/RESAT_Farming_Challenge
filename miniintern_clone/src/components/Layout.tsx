import { Outlet } from "react-router-dom";
import * as S from "../styles/styles";

function Layout() {
  return (
    <>
      <S.Header>
        <div className="nav">
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
            <li>3일차</li>
            <li>4일차</li>
            <li>5일차</li>
          </ul>
          <div className="right_container">
            <div>서비스 소개</div>
            <div>알람</div>
            <div>로그인</div>
          </div>
        </div>
      </S.Header>

      <Outlet />
    </>
  );
}
export default Layout;
