import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/todoSlice";
import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { AddForm } from "./components/AddForm";
import { TodoList } from "./components/TodoList";

function App() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleAddItem = () => {
    if (text) {
      dispatch(addItem(text));
      setText("");
    }
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>
      <AddForm
        text={text}
        handleAddItem={handleAddItem}
        handleInputChange={handleInputChange}
      ></AddForm>
      <TodoList todoList={todoList} dispatch={dispatch}></TodoList>
    </Container>
  );
}

export default App;
