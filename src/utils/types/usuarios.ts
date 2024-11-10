export interface UsuarioI {
  id: string;
  nome: string;
  nascimento: string;
  email: string;
  nacionalidade: string;
  descricao: string;
  foto: string;
  genero: string;
  linguaMaternaId: number; // Use "number" minúsculo aqui
  idiomasInterresse: string[];
  tempoDeUso: number; // Use "number" minúsculo aqui
  mensagensTotais: number; // Use "number" minúsculo aqui
  sessoesTotais: number; // Use "number" minúsculo aqui
}
