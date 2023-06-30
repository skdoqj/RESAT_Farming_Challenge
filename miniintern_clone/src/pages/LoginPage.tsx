import { useState } from "react";
import * as S from "../styles/loginStyle";

function LoginPage() {
  const [messege, setMessege] = useState("sd");

  return (
    <S.LoginForm>
      <h1>Log In</h1>
      <div className="input_wrap">
        <input type="id" placeholder="아이디"></input>
        <input type="password" placeholder="비밀번호"></input>
      </div>
      <div className="messge">{messege}</div>
      <button>로그인</button>

      <div className="find_wrap">
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
        <span className="sign_in">회원가입</span>
      </div>

      {/* <div className="test">임시 계정 suwan 1234</div> */}
    </S.LoginForm>
  );
}
export default LoginPage;
