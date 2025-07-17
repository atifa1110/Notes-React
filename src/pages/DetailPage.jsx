import { showFormattedDate } from "@utils/date";
import ActionButton from "@/components/ActionButton";
import { BiArchiveIn, BiArchiveOut, BiTrash } from "react-icons/bi";
import { useDetailNote } from "../hooks/use-detail-note";
import { useDeleteNote } from "../hooks/use-delete-note";
import { useArchiveNote } from "../hooks/use-archive";
import { useUnArchiveNote } from "../hooks/use-unarchive";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";

function DetailPage() {
    const params = useParams();
    const noteId = params['note_id'];
    
    const { data: note = {}, isLoading } = useDetailNote(noteId);
    const { mutate: deleteNote } = useDeleteNote(noteId);
    const { mutate: archiveNote } = useArchiveNote(noteId);
    const { mutate: unArchiveNote } = useUnArchiveNote(noteId);

    if(isLoading) <LoadingIndicator/>
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{note.title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
        <div className="detail-page__body">{note.body}</div>
        <div className="detail-page__action">
        {note.archived ? (
          <ActionButton
            title="Aktifkan"                  
            icon={<BiArchiveOut />}
            onClick={unArchiveNote}
          />
        ) : (
          <ActionButton
            title="Arsipkan"
            icon={<BiArchiveIn />}
            onClick={archiveNote}
          />
          )}
            <ActionButton
              title="Hapus"
              icon={<BiTrash />}
              onClick={deleteNote}
            />
          </div>
        </section>
      );
}


  
export default DetailPage;