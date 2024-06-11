import { Note, Page } from "../App";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  notes: Note[];
  setCur: React.Dispatch<React.SetStateAction<number>>;
}

export const List: React.FC<Props> = ({ setPage, notes, setCur }) => {
  const editNote = (id: number) => {
    setCur(id);
    setPage("edit");
  };
  return (
    <>
      <h1>List</h1>
      <button onClick={() => setPage("new")}>New</button>
      {notes.map(({ id, text }) =>
        text ? (
          <p key={id} onClick={() => editNote(id)}>
            {text}
          </p>
        ) : (
          <></>
        )
      )}
    </>
  );
};
