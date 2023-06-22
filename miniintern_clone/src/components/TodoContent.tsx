import { useEffect, useState } from "react";
import * as S from "../styles/todoStyle";
import { TodoType, TodoPropsType } from "../types/todo";
const KEY = "todoList";

function TodoContent({ todo, getLocalTodoList, localList }: TodoPropsType) {
  const [modifying, setModifying] = useState(false);
  const [enterModifyTodo, setEnterModifyTodo] = useState("");
  const [importance, setImportance] = useState("");

  //삭제
  const deleteTodo = (key: number) => {
    const newList = localList.filter((v) => v.key !== key);
    localStorage.setItem(KEY, JSON.stringify(newList));
    getLocalTodoList();
  };

  //수정
  const modifyTodo = (value: string) => {
    setModifying(true);
    setEnterModifyTodo(value);
  };
  const modifyingDone = (key: number) => {
    const modifiedList = localList.map((v) =>
      v.key === key ? { ...v, value: enterModifyTodo, 중요도: importance } : v
    );
    localStorage.setItem(KEY, JSON.stringify(modifiedList));
    getLocalTodoList();
    setModifying(false);
  };

  const onCheck = (key: number) => {
    const checkedList = localList.map((v) => ({
      ...v,
      cheked: v.key === key ? !v.cheked : v.cheked,
    }));
    localStorage.setItem(KEY, JSON.stringify(checkedList));
    getLocalTodoList();
    console.log(checkedList);
  };

  return (
    <>
      <li key={todo.key} className="todo_content">
        <div>
          <input
            type="checkbox"
            checked={todo.cheked}
            onChange={() => onCheck(todo.key)}
          ></input>

          {modifying ? (
            <>
              <input
                type="text"
                value={enterModifyTodo}
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
              <button onClick={() => modifyingDone(todo.key)}>수정완료</button>
            </>
          ) : (
            <>
              <div>
                <span>{todo.value}</span>
                <span>{todo.중요도}</span>
                <div className="ud">
                  <button onClick={() => modifyTodo(todo.value)}>수정</button>
                  <button onClick={() => deleteTodo(todo.key)}>삭제</button>
                </div>
              </div>
            </>
          )}
        </div>
      </li>
    </>
  );
}
export default TodoContent;
