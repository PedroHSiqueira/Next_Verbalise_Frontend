import { UsuarioI } from '@/utils/types/usuarios';
import { create } from 'zustand';

type UsuarioStore = {
  usuario: UsuarioI;
  logar: (usuario: UsuarioI) => void;
  deslogar: () => void;
};

export const useUsuarioStore = create<UsuarioStore>((set) => ({
  usuario: {} as UsuarioI,
    logar: (usuarioLogado) => set({ usuario: usuarioLogado }),
    deslogar: () => set({ usuario: {} as UsuarioI }),
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));
