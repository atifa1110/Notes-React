import React from "react";
import { useTranslation } from "../hooks/use-translation";
import { Icons } from "../components/Icons";
import ActionButton from "@/components/ActionButton";
import PropTypes from "prop-types";

function NoteInput({ title, onTitleChange, onBodyChange, onHandleSubmit} ) {  
  const t = useTranslation();
  
  return (
    <section className="add-new-page">
          <form className="add-new-page__input" onSubmit={onHandleSubmit}>
            <input
              className="add-new-page__input__title"
              placeholder={t.NOTE.FORM.TITLE}
              value={title}
              onChange={onTitleChange}
            />
    
            <div
              className="add-new-page__input__body"
              contentEditable
              suppressContentEditableWarning
              onInput={onBodyChange}
              placeholder={t.NOTE.FORM.BODY}
              style={{
                minHeight: '200px',
                border: '1px solid #ccc',
                padding: '1rem',
                marginTop: '1rem',
                borderRadius: '4px',
              }}
            />
          </form>
    
          <div className="add-new-page__action">
            <ActionButton
              title="Add"
              icon={<Icons.Check size={20} />}
              onClick={onHandleSubmit}
            />
          </div>
        </section>
  );
}

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange : PropTypes.func.isRequired,
  onHandleSubmit : PropTypes.func.isRequired
};

export default NoteInput;