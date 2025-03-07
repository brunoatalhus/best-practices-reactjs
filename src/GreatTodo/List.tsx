import { FC } from 'react';
import { Todo } from './hooks/useGreatTodo';
import ListItem from './ListItem';

export interface ListProps {
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

interface MainListProps extends ListProps {
  todos: Todo[];
}

const List: FC<MainListProps> = ({
  todos,
  toggle,
  remove,
}) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => <ListItem key={todo.id} todo={todo} remove={remove} toggle={toggle} />)}
    </ul>
  );
};

export default List;
