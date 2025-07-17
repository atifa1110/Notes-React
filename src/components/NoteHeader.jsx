import { Link } from 'react-router-dom';
import { useLocale } from '../hooks/use-locale';
import { useTheme } from '../hooks/use-theme';
import { useTranslation } from '../hooks/use-translation';
import { useLogout } from '../hooks/use-logout';
import { useAuth } from '@/hooks/use-auth';
import { LOCALE } from '../lib/locale';
import { Icons } from '@/components/icons';

function NoteHeader() {
  const { locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const { auth } = useAuth();
  const logout = useLogout();
  const t = useTranslation();
  
  return (   
     <header>
        <h1><Link to="/">{t.APP.NAME}</Link></h1>

        {/* Always visible buttons */}
        <button className="toggle-theme" type="button" onClick={toggleTheme}>
          {theme === 'dark' ? <Icons.Light size={32} /> : <Icons.Dark size={32} />}
        </button>

        <button className="toggle-theme" type="button" onClick={toggleLocale}>
          <Icons.Languages size={32} />
           <span  style={{ fontSize: '22px' }}>
              {locale === LOCALE.ID ? 'EN' : 'ID'}
            </span>
        </button>

        {/* Only show these if logged in */}
        {auth && (
          <>
            <Link style={{ fontSize: '22px' }} to="/archive">{t.APP.ARCHIVE}</Link>

            <button className="toggle-theme" type="button" onClick={logout}>
              <Icons.LogOut size={32} />
              <span style={{ fontSize: '22px' }}>{auth.name || t.AUTH.LOGOUT}</span>
            </button>
          </>
        )}

      </header>
  );
}

export default NoteHeader;
