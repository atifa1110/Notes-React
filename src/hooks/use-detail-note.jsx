import { useQuery } from '@tanstack/react-query';

import { NoteService } from '@/lib/service';

export function useDetailNote(id) {
  return useQuery({
    queryKey: ['notes', id],
    queryFn: () => NoteService.getById(id),
  });
}