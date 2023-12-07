export interface TodoType {
  key: number;
  value: string;
  중요도: string;
  cheked: boolean;
}

export interface TodoPropsType {
  todo: TodoType;
  localArray: TodoType[];
  callAction: (action: string, key: number, updateValue?: {}) => void;
}
