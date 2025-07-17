import { useSearchParams } from "react-router-dom";
import { useArchivedNotes } from "../hooks/use-archives";
import { useTranslation } from "../hooks/use-translation";
import LoadingIndicator from "../components/LoadingIndicator";
import NoteList from "../components/NoteList";

function ArchivePage (){
  const t = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const { data = [], isLoading } = useArchivedNotes();

  const archivedNotes = data
    .filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => -a.createdAt.localeCompare(b.createdAt));

  const isEmpty = archivedNotes.length === 0;
  
  return (
    <section className="archives-page">
      <h2>{ t.SEARCH.ARCHIVE }</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder={t.SEARCH.PLACEHOLDER}
          value={searchQuery}
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
      </section>
      {(archivedNotes.length > 0 && !isLoading) ? <NoteList notes={archivedNotes} /> : ''}
        {isLoading ? <LoadingIndicator/> : ''}
        {isEmpty && (
          <li className="px-6 py-4 text-center text-muted-foreground">
            &ldquo; {t.NOTE.ALL.EMPTY} &rdquo;
          </li>
        )}  
    </section>
  );
}

export default ArchivePage;