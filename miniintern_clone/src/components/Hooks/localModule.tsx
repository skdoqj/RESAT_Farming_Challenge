import { useEffect, useState } from "react";

export const useLocal = (
  KEY: string,
  action: string,
  inputValue: {},
  itemKey: number
) => {
  const [getLocalArray, setGetLocalArray] = useState<any[]>([]);

  //read
  const readLocal = () => {
    const value = localStorage.getItem(KEY);
    if (typeof value === "string") {
      const localList = JSON.parse(value);
      return localList;
    }
  };

  //create
  const createLocal = () => {
    const newArray = [...getLocalArray, inputValue];
    localStorage.setItem(KEY, JSON.stringify(newArray));
  };

  //delete
  const deleteLocal = () => {
    const newArray = getLocalArray.filter((v) => v.key !== itemKey);
    localStorage.setItem(KEY, JSON.stringify(newArray));
  };

  //update
  const updateLocal = () => {
    localStorage.setItem(KEY, JSON.stringify(inputValue));
  };

  useEffect(() => {
    switch (action) {
      case "read":
        setGetLocalArray(readLocal());
        break;
      case "create":
        createLocal();
        break;
      case "delete":
        deleteLocal();
        break;
      case "update":
        updateLocal();
        break;
    }
  }, [action]);

  return [getLocalArray];
};
