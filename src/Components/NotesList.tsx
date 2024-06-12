import { List, ListItemButton, ListItemText } from "@mui/material";
import { Note } from "../App";
import { fabType } from "./MyFAB";

interface Props {
  notes: Note[];
  setFabId: React.Dispatch<React.SetStateAction<fabType>>;
  setNoteId: React.Dispatch<React.SetStateAction<number>>;
  updateText: any;
}

export const NotesList: React.FC<Props> = ({
  notes,
  setFabId,
  setNoteId,
  updateText,
}) => (
  <List>
    {notes.map(({ id, text }) => (
      <>
        {text === "" ? (
          <></>
        ) : (
          <>
            <br />
            <ListItemButton
              selected={true}
              key={id}
              onClick={() => {
                setNoteId(id);
                updateText(id);
                setFabId("edit");
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </>
        )}
      </>
    ))}
  </List>
);
