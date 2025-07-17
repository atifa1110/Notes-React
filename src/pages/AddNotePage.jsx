import React from "react";
import { useAddNote } from "../hooks/use-add-note";
import useInputValue from "@/hooks/use-input";
import NoteInput from "../components/NoteInput";

function AddNotePage() {
  const [title, onTitleChange] = useInputValue('');
  const [content, setContent] = React.useState('');
  const { mutate: addNote } = useAddNote();

  const handleChangeContent = (e) => {
    setContent(e.target.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newNote = {
      title: title.trim(),
      body: content.trim(),
    };

    addNote(newNote);
  };

  return (
    <NoteInput title={title} onTitleChange={onTitleChange} 
    onBodyChange={handleChangeContent} onHandleSubmit={handleSubmit}/>
  );
}

export default AddNotePage;
