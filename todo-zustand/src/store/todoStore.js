import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [], // 상태 (초기값 빈배열)

  // todo를 추가하는 함수
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  /* [
      {completed: false, id: 1748835898099, text: "장보기"}, 
      {completed: false, id: 1748835962407, text: "퇴근하기"}
     ] */

  // todo의 완료여부 변경하는 함수
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  // todo를 삭제하는 함수
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
