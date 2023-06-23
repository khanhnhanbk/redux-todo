import { List } from "@mui/material";
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <List>
      {props.todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          dispatch={props.dispatch}
          todo={todo}
        ></TodoItem>
      ))}
    </List>
  );
}
