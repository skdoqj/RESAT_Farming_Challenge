import { useEffect, useState } from "react";
import * as S from "../styles/todoStyle";
import { TodoType } from "../types/todo";
import TodoContent from "../components/TodoContent";

const KEY = "todoList";

function Todo() {
  const [enterTodo, setEnterTodo] = useState("");
  const [importance, setImportance] = useState("");
  const [localList, setLocalList] = useState<TodoType[]>([]);

  const createTodo = () => {
    console.log("입력값", enterTodo);
    if (enterTodo === "") return alert("할 일을 입력해주세요");
    const todoArray: TodoType = {
      key: Math.random(),
      value: enterTodo,
      중요도: importance,
      cheked: false,
    };

    //로컬에 넣기
    localStorage.setItem(KEY, JSON.stringify([...localList, todoArray]));
    //로컬 get
    getLocalTodoList();
    setEnterTodo("");
  };

  const getLocalTodoList = () => {
    const value = localStorage.getItem(KEY);
    if (typeof value === "string") {
      const localTodoList = JSON.parse(value);
      setLocalList(localTodoList);
    }
    console.log("get", localList);
  };

  useEffect(() => {
    getLocalTodoList();
    // localStorage.clear();
  }, []);

  return (
    <S.TodoForm>
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
            value={enterTodo}
            className="todo_enter"
          ></input>
          <select name="중요도" onChange={(e) => setImportance(e.target.value)}>
            <option value="">중요도</option>
            <option value="낮음">낮음</option>
            <option value="보통">보통</option>
            <option value="높음">높음</option>
            <option value="아주높음">아주높음</option>
          </select>
          <button onClick={createTodo}>추가</button>
        </div>
        <S.Todo>
          <ul className="todo_list">
            {localList.map((todo: TodoType) => (
              <TodoContent
                todo={todo}
                key={todo.key}
                getLocalTodoList={getLocalTodoList}
                localList={localList}
              ></TodoContent>
            ))}
          </ul>
        </S.Todo>
      </div>
    </S.TodoForm>
  );
}
export default Todo;
