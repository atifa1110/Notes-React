import { useAuth } from '@/hooks/use-auth';
import { TokenManager } from '@/lib/token-manajer';

export function useLogout() {
  const { setAuth } = useAuth();
  return () => {
    TokenManager.removeToken();
    setAuth(null);
  };
}