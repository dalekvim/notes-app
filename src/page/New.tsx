import { useState } from "react";
import { Note, Page } from "../App";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const New: React.FC<Props> = ({ setPage, setNotes }) => {
  const [text, setText] = useState("");

  const updateNotes = () => {
    setNotes((curNotes) => {
      const newNote: Note = { id: curNotes.length, text: text };
      const newNotes = [...curNotes, newNote];
      console.log(newNote);
      return newNotes;
    });
    setText("");
    setPage("list");
  };

  return (
    <>
      <h1>New</h1>
      {text ? (
        <button onClick={updateNotes}>Save</button>
      ) : (
        <button onClick={() => setPage("list")}>Cancel</button>
      )}
      <br />
      <br />
      <textarea
        name="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </>
  );
};
