import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { EditNote } from "./Components/EditNote";
import { MyFAB, fabType } from "./Components/MyFAB";
import { NotesList } from "./Components/NotesList";

export interface Note {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [fabId, setFabId] = useState<fabType>("add");
  const [noteId, setNoteId] = useState<number>(0);

  const [notes, saveNotes] = useLocalStorage<Note[]>("notes", [
    { id: 0, text: "Click here to edit." },
  ]);

  const getNote = (id: number) => {
    return notes[id];
  };

  const [text, setText] = useState(getNote(noteId).text);

  const setNote = () => {
    const editedNote = { id: noteId, text: text };
    notes[noteId] = editedNote;
    saveNotes(notes);
    setText("");
  };

  const addNote = () => {
    const blankNote = { id: notes.length, text: "" };
    const newNotes = [...notes, blankNote];
    saveNotes(newNotes);
    setNoteId(newNotes.length - 1);
  };

  const updateText = (id: number) => {
    setText(getNote(id).text);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ height: "100%" }}>
        {fabId === "add" ? (
          <NotesList
            notes={notes}
            setFabId={setFabId}
            setNoteId={setNoteId}
            updateText={updateText}
          />
        ) : fabId === "edit" ? (
          <EditNote text={text} setText={setText} />
        ) : (
          <></>
        )}
        <MyFAB
          fabId={fabId}
          setFabId={setFabId}
          addNote={addNote}
          setNote={setNote}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
