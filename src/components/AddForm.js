import { TextField, Button, Container, styled } from "@mui/material";

const ContainerStyled = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(4),
}));
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: "100%",
}));
export function AddForm(props) {
  return (
    <ContainerStyled maxWidth="sm">
      <TextFieldStyled
        label="Add Item Here"
        variant="outlined"
        value={props.text}
        onChange={props.handleInputChange}
        placeholder="Add item here"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={props.handleAddItem}
        size="big"
      >
        Add
      </Button>
    </ContainerStyled>
  );
}
