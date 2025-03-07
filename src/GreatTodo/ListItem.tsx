import { FC } from 'react';
import { Todo } from './hooks/useGreatTodo';
import { ListProps } from './List';

export interface ListItemProps extends ListProps {
  todo: Todo;
}

const ListItem: FC<ListItemProps> = ({
  todo,
  toggle,
  remove,
}) => {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => remove(todo.id)}>❌</button>
    </li>
  );
}

export default ListItem;