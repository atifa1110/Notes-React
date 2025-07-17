import React from "react";
import { useTranslation } from "../hooks/use-translation";
import { useNotes } from "../hooks/use-notes";
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingIndicator from "../components/LoadingIndicator";
import NoteList from "../components/NoteList";
import ActionButton from "../components/ActionButton";
import { Icons } from "../components/Icons";

function HomePage() {
  const t = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const { data = [], isLoading } = useNotes({
    search: searchQuery,
  });

  const notes = data
    .filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => -a.createdAt.localeCompare(b.createdAt));

  const isEmpty = !isLoading && notes.length === 0;

  return (
   <section className="homepage">
      <h2>{ t.SEARCH.ACTIVE }</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder={t.SEARCH.PLACEHOLDER}
          value={searchQuery}
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
      </section>
      {(notes.length > 0 && !isLoading) ? <NoteList notes={notes} /> : ''}
      {isLoading ? <LoadingIndicator/> : ''}

      <div className="homepage__action">
        <ActionButton
          title="Add"
          icon={<Icons.Plus size={20} />}
          onClick={() => navigate('/add')}
        />
      </div>

      {isEmpty && (
            <li className="px-6 py-4 text-center text-muted-foreground">
              &ldquo; {t.NOTE.ALL.EMPTY} &rdquo;
            </li>
          )}
    </section>
  );
}


export default HomePage;