import { showFormattedDate } from '@utils/date';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItem = ({ title, createdAt, body, id}) => {
    return (
      <article className='note-item'>
        <div className="note-item__content">
          <h3 className="note-item__title">
            <Link to={`/notes/${id}`}>{title}</Link>
          </h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
      </article>
    )
  }

  NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  };
  

  export default NoteItem