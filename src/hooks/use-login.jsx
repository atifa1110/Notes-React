import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks/use-auth';
import { AuthenticationService } from '@/lib/service';
import { TokenManager } from '../lib/token-manajer';

export function useLogin() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: AuthenticationService.login,
    onSuccess: (data) => {
      console.log("Login response:", data);
      TokenManager.setToken({ access_token: data.accessToken });
      setAuth(data);
      navigate('/');
    },
  });
}