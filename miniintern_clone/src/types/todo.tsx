export interface TodoType {
  key: number;
  value: string;
  중요도: string;
  cheked: boolean;
}

export interface TodoPropsType {
  todo: TodoType;
  getLocalTodoList: () => void;
  localList: TodoType[];
}
