import React from 'react';
import NoteItem from '@/components/NoteItem';
import PropTypes from "prop-types";

function NoteList({ notes }) {
  return (
    notes.length === 0 ? (
      <p className='notes-list__empty'>Catatan Tidak Ada</p>
    ) : (
      <div className='notes-list'>
        {notes.map((note) => {
            return <NoteItem key={note.id} {...note} />;
          })}
      </div>
    )
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    ﾠid: PropTypes.string.isRequired,
    ﾠtitle: PropTypes.string.isRequired,
    ﾠbody: PropTypes.string.isRequired,
    ﾠcreatedAt: PropTypes.string.isRequired,
   })).isRequired
};

export default NoteList;
