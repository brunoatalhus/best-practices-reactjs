import { useState } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
};

export default function useGreatTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id: number): void => {
    setTodos((prev: Todo[]) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number): void => {
    setTodos((prev: Todo[]) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}