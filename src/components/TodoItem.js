import { removeItem, toggleItem } from "../redux/todoSlice";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styles from "./Todo.module.css";
export function TodoItem(props) {
  return (
    <ListItem alignItems="center">
      <IconButton onClick={() => props.dispatch(toggleItem(props.todo.id))}>
        {props.todo.isActive ? (
          <CheckCircleIcon color="primary" />
        ) : (
          <ChangeCircleIcon color="primary" />
        )}
      </IconButton>
      <ListItemText
        primary={props.todo.text}
        className={props.todo.isActive ? "" : styles.isDone}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => props.dispatch(removeItem(props.todo.id))}>
          <RemoveCircleIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
