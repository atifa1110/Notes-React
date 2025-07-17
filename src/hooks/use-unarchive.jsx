import { useMutation, useQueryClient } from '@tanstack/react-query';

import { NoteService } from '@/lib/service';
import { useNavigate } from 'react-router-dom';

export function useUnArchiveNote(id) {
  const queryClient = useQueryClient();
   const navigate = useNavigate();

  return useMutation({
    mutationFn: () => NoteService.unarchiveById(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['notes', 'archived']);
      navigate("/");
    },
  });
}