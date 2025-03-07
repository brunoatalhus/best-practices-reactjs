import { FC } from 'react';
import useGreatTodo from './hooks/useGreatTodo';
import Add from './Add';
import List from './List';

const GreatTodo: FC = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  } = useGreatTodo();

  return (
    <div style={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
      <h2>TODO List</h2>
      <Add add={addTodo} />
      <List todos={todos} remove={removeTodo} toggle={toggleTodo} />
    </div>
  );
};

export default GreatTodo;