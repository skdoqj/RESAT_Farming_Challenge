import { useState, useEffect } from "react";
import * as S from "../styles/todoStyle";
import { TodoPropsType } from "../types/todoTypes";

function TodoContent({ todo, localArray, callAction }: TodoPropsType) {
  const [modifying, setModifying] = useState(false);
  const [enterModifyTodo, setEnterModifyTodo] = useState("");
  const [importance, setImportance] = useState("");

  //삭제
  const deleteTodo = () => {
    callAction("delete", todo.key);
  };

  //수정
  const modifyTodo = (value: string) => {
    setModifying(true);
    setEnterModifyTodo(value);
  };
  const modifyingDone = (key: number) => {
    const modifiedList = localArray.map((v) =>
      v.key === key ? { ...v, value: enterModifyTodo, 중요도: importance } : v
    );
    callAction("update", todo.key, modifiedList);
    setModifying(false);
  };

  const onCheck = (key: number) => {
    const checkedList = localArray.map((v) => ({
      ...v,
      cheked: v.key === key ? !v.cheked : v.cheked,
    }));
    callAction("update", todo.key, checkedList);
  };

  return (
    <>
      <li key={todo.key} className="todo_content">
        <input
          type="checkbox"
          checked={todo.cheked}
          onChange={() => onCheck(todo.key)}
        ></input>
        <div className="txt_wrapper">
          {modifying ? (
            <>
              <input
                type="text"
                value={enterModifyTodo}
                className="default_input"
                onChange={(e) => setEnterModifyTodo(e.target.value)}
              ></input>
              <select
                name="중요도"
                onChange={(e) => setImportance(e.target.value)}
              >
                <option value="">중요도</option>
                <option value="낮음">낮음</option>
                <option value="보통">보통</option>
                <option value="높음">높음</option>
                <option value="아주높음">아주높음</option>
              </select>
              <button
                className="default_btn"
                onClick={() => modifyingDone(todo.key)}
              >
                수정완료
              </button>
            </>
          ) : (
            <>
              <div className="todo_txt">
                <span>{todo.value}</span>
                <span>{todo.중요도}</span>
              </div>
              <div className="btns">
                <button
                  className="default_btn"
                  onClick={() => modifyTodo(todo.value)}
                >
                  수정
                </button>
                <button className="default_btn" onClick={deleteTodo}>
                  삭제
                </button>
              </div>
            </>
          )}
        </div>
      </li>
    </>
  );
}
export default TodoContent;
