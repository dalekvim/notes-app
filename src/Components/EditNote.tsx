import TextField from "@mui/material/TextField";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const EditNote: React.FC<Props> = ({ text, setText }) => (
  <>
    <br />
    <TextField
      fullWidth
      multiline
      autoFocus
      id="outlined-basic"
      variant="outlined"
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
    />
  </>
);
