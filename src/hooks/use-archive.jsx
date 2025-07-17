import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { NoteService } from '@/lib/service';

export function useArchiveNote(id) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => NoteService.archiveById(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['notes', 'archived']);
      navigate("/");
    },
  });
}