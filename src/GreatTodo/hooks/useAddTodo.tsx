import { useState } from 'react';
import { Todo } from './useGreatTodo';

export default function useAddTodo(add: (todo: Todo) => void) {
  const [input, setInput] = useState<string>('');

  const onClickToAdd = () => {
    if (input.trim() === "") return;
    add({ id: Date.now(), text: input, completed: false } as Todo);
    setInput('');
  }

  return {
    input,
    setInput,
    onClickToAdd,
  }
}