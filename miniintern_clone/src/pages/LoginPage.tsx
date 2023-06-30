import { useState } from "react";
import * as S from "../styles/loginStyle";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const movePage = useNavigate();
  const tempID = "suwan";
  const tempPW = "1234";
  const [messege, setMessege] = useState("");
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (PW === "" || ID === "") {
      setMessege("아이디 또는 비밀번호를 입력해 주세요");
    } else if (ID != tempID) {
      setMessege("아이디를 확인해 주세요");
      console.log(ID, PW);
    } else if (PW != tempPW) {
      setMessege("비밀번호를 확인해 주세요");
    } else {
      localStorage.setItem("login", ID);
      movePage("/");
      window.location.reload();
    }
  };

  return (
    <S.LoginForm onSubmit={onSubmit}>
      <h1>Log In</h1>

      <div className="input_wrap">
        <input
          type="id"
          placeholder="아이디"
          onChange={(e) => setID(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPW(e.target.value)}
        ></input>
      </div>
      <div className="messge">{messege}</div>
      <button type="submit">로그인</button>

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
