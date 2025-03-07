import { FC } from 'react';
import useAddTodo from './hooks/useAddTodo';
import { Todo } from './hooks/useGreatTodo';

interface AddProps {
  add: (todo: Todo) => void;
}

const Add: FC<AddProps> = ({
  add,
}) => {
  const { 
    input,
    setInput,
    onClickToAdd,
  } = useAddTodo(add);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicionar tarefa"
      />
      <button onClick={onClickToAdd}>Adicionar</button>
    </>
  );
}

export default Add;