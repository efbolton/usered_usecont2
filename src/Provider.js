import React from "react";
import { TodoListContext, initialState, actions } from "./App";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { reducer } from "./Reducer";

export const Provider = ({}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
    },
  };
  return (
    <TodoListContext.Provider value={value}>
      <AddTodo />
      <TodoList />
    </TodoListContext.Provider>
  );
};
