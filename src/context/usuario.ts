import { UsuarioI } from '@/utils/types/usuarios';
import { create } from 'zustand';

type UsuarioStore = {
  usuario: UsuarioI;
  logar: (usuario: UsuarioI) => void;
  deslogar: () => void;
};

const recuperarUsuarioDoLocalStorage = (): UsuarioI | null => {
  const usuarioLocal = localStorage.getItem('usuario');
  return usuarioLocal ? JSON.parse(usuarioLocal) : null;
};

export const useUsuarioStore = create<UsuarioStore>((set) => {
  const usuarioLocal = recuperarUsuarioDoLocalStorage();

  return {
    usuario: usuarioLocal || ({} as UsuarioI),  
    logar: (usuarioLogado) => {
      localStorage.setItem('usuario', JSON.stringify(usuarioLogado)); 
      set({ usuario: usuarioLogado }); 
    },
    deslogar: () => {
      localStorage.removeItem('usuario'); 
      set({ usuario: {} as UsuarioI });  
    },
  };
});
