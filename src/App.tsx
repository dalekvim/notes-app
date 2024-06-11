import React, { useState } from "react";
import { Edit } from "./page/Edit";
import { List } from "./page/List";
import { New } from "./page/New";

export type Page = "list" | "view" | "edit" | "new";

export interface Note {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("list");
  const [notes, setNotes] = useState<Note[]>([]);
  const [cur, setCur] = useState(0);

  const getNote = (id: number) => {
    return notes[id];
  };

  const setNote = (id: number, text: string) => {
    const upNote: Note = { id: id, text: text };
    notes[id] = upNote;
    setNotes(notes);
  };

  return (
    <>
      {page === "list" ? (
        <List setPage={setPage} notes={notes} setCur={setCur} />
      ) : page === "edit" ? (
        <Edit setPage={setPage} cur={cur} getNote={getNote} setNote={setNote} />
      ) : page === "new" ? (
        <New setPage={setPage} setNotes={setNotes} />
      ) : (
        <>Something's gone wrong.</>
      )}
    </>
  );
};

export default App;
