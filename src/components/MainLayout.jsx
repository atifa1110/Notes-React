import { Outlet } from 'react-router-dom';
import NoteHeader from './NoteHeader';


export default function MainLayout() {

  return (
    <div className="app-container">
      <NoteHeader/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
