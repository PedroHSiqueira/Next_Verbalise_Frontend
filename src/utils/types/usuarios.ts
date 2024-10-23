export interface UsuarioI {
  id: string;
  nome: string;
  idade: Number;
  email: string;
  nacionalidade: string;
  descricao: string;
  foto: string;
  genero: string;
  linguaMaternaId: Number;
  idiomasInterresse: string[];
  tempoDeUso: Number;
  mensagensTotais: Number;
  sessoesTotais: Number;
}
