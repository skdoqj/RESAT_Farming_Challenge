export const createLocal = () => {};

export const readLocal = (KEY: string) => {
  const value = localStorage.getItem(KEY);
  if (typeof value === "string") {
    const localTodoList = JSON.parse(value);
    return localTodoList;
  }
};
export const updateLocal = () => {};
export const deleteLocal = () => {};
