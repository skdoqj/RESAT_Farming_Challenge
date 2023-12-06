export const createLocal = (KEY: string, newArray: any[]) => {
  localStorage.setItem(KEY, JSON.stringify(newArray));
};

export const readLocal = (KEY: string) => {
  const value = localStorage.getItem(KEY);
  if (typeof value === "string") {
    const localTodoList = JSON.parse(value);
    return localTodoList;
  }
};
export const updateLocal = () => {};
export const deleteLocal = (KEY: string, localList: any[], key: number) => {
  const newList = localList.filter((v) => v.key !== key);
  localStorage.setItem(KEY, JSON.stringify(newList));
};
