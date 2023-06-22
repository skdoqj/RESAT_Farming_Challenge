import { useState } from "react";
import * as S from "../styles/todoStyle";

function Todo() {
  const [enterTodo, setEnterTodo] = useState("");
  console.log(enterTodo);
  return (
    <S.Todo>
      <div className="todo_page">
        <h1>ToDo List</h1>
        <div className="option">
          <button>전체</button>
          <button>해결</button>
          <button>미해결</button>
        </div>
        <div className="input_array">
          <input
            type="text"
            onChange={(e) => setEnterTodo(e.target.value)}
            className="todo_enter"
          ></input>
          <select name="중요도">
            <option value="">중요도</option>
            <option value="높음">낮음</option>
            <option value="높음">보통</option>
            <option value="높음">높음</option>
            <option value="높음">아주높음</option>
          </select>
          <button>추가</button>
        </div>

        <div className="todo_list">
          <div className="todo_content">
            <div>
              <input type="checkbox"></input>
              <span>text</span>
              <span>높음</span>
            </div>
            <div className="ud">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </S.Todo>
  );
}
export default Todo;
