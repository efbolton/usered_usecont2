import React, { createContext } from "react";
import { Provider } from "./Provider";
export const TodoListContext = createContext();
export const initialState = { todoList: [] };
export const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
};

function App() {
  return <Provider />;
}
export default App;
