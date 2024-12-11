export interface UsuarioI {
  id: string;
  nome: string;
  nascimento: string;
  email: string;
  nacionalidade: string;
  descricao: string;
  foto: string;
  genero: string;
  linguaMaternaId: number;
  idiomasInterresse: string[];
  tempoDeUso: number;
  mensagensTotais: number;
  sessoesTotais: number;
  createdAt: string;
  updatedAt: string;
}
