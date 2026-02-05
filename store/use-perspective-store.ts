import { create } from 'zustand';
import { PerspectiveDetail } from '@/types/details';
import { perspectiveDetails } from '@/data/mock-data';

interface PerspectiveStore {
  perspectiveDetails: { [key: string]: PerspectiveDetail };
  getPerspectiveDetail: (id: string) => PerspectiveDetail | undefined;
}

export const usePerspectiveStore = create<PerspectiveStore>((set, get) => ({
  perspectiveDetails,
  getPerspectiveDetail: (id: string) => {
    return get().perspectiveDetails[id];
  },
}));
