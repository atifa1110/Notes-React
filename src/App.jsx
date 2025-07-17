import { Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './components/MainLayout'
import AddNotePage from '@/pages/AddNotePage';
import ArchivePage from '@/pages/ArchivePage';
import DetailPage from '@/pages/DetailPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import { ProtectedRoute } from '@/lib/protected-route';

function App() {
  return (
      <Routes>
      {/* Layout shared by all pages */}
      <Route element={<MainLayout />}>
        
        {/* Public */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/add" element={<AddNotePage/>}/>
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes/:note_id" element={<DetailPage />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
