import { useEffect, useState } from "react";
import * as S from "../styles/todoStyle";
const KEY = "todoList";

interface TodoType {
  key: number;
  value: string;
  중요도: string;
  cheked: boolean;
}

function Todo() {
  const [enterTodo, setEnterTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [importance, setImportance] = useState("");
  const [localList, setLocalList] = useState<TodoType[]>([]);
  const [modifying, setModifying] = useState(false);

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

  //삭제
  const deleteTodo = (key: number) => {
    const newList = localList.filter((v) => v.key !== key);
    localStorage.setItem(KEY, JSON.stringify(newList));
    getLocalTodoList();
  };

  //수정
  const modifyTodo = (key: number) => {
    console.log(key);
    setModifying(true);
  };
  const modifyingDone = () => {
    setModifying(false);
  };

  useEffect(() => {
    getLocalTodoList();
    // localStorage.clear();
  }, []);

  const onCheck = () => {};

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
            value={enterTodo}
            className="todo_enter"
          ></input>
          <select name="중요도" onChange={(e) => setImportance(e.target.value)}>
            <option value="">중요도</option>
            <option value="높음">낮음</option>
            <option value="높음">보통</option>
            <option value="높음">높음</option>
            <option value="높음">아주높음</option>
          </select>
          <button onClick={createTodo}>추가</button>
        </div>

        <ul className="todo_list">
          {localList.map((todo: TodoType) => (
            <li key={todo.key} className="todo_content">
              <div>
                <input
                  type="checkbox"
                  checked={todo.cheked}
                  onChange={onCheck}
                ></input>

                {modifying ? (
                  <>
                    <input type="text"></input>
                    <select
                      name="중요도"
                      onChange={(e) => setImportance(e.target.value)}
                    >
                      <option value="">중요도</option>
                      <option value="높음">낮음</option>
                      <option value="높음">보통</option>
                      <option value="높음">높음</option>
                      <option value="높음">아주높음</option>
                    </select>
                    <button onClick={modifyingDone}>수정완료</button>
                  </>
                ) : (
                  <>
                    <div>
                      <span>{todo.value}</span>
                      <span>{todo.중요도}</span>
                      <div className="ud">
                        <button onClick={() => modifyTodo(todo.key)}>
                          수정
                        </button>
                        <button onClick={() => deleteTodo(todo.key)}>
                          삭제
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Todo>
  );
}
export default Todo;
