import { styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";
const grayColor = "#cccccc";

export const TodoForm = styled.div`
  .option {
    margin: 10px 0 20px 0;
  }
  .input_array {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  select {
    border: 1px solid ${grayColor};
    border-radius: 5px;
    margin-left: 10px;
    padding: 3px 5px;
  }
`;

export const Todo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .todo_content {
    display: flex;
    margin-top: 10px;
    .txt_wrapper {
      display: flex;
      align-items: center;
      width: 300px;
      .todo_txt {
        display: inline;
        margin-left: 10px;
      }
      .btns {
        margin-left: auto;
      }
    }
  }
`;
