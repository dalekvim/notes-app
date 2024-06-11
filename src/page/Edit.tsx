import { useState } from "react";
import { Note, Page } from "../App";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  cur: number;
  getNote: (id: number) => Note;
  setNote: (id: number, text: string) => void;
}

export const Edit: React.FC<Props> = ({ cur, setPage, getNote, setNote }) => {
  const [text, setText] = useState(getNote(cur).text);

  return (
    <>
      <h1>Edit</h1>
      <button
        onClick={() => {
          setNote(cur, text);
          setPage("list");
        }}
      >
        {text ? "Save" : "Delete"}
      </button>
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
