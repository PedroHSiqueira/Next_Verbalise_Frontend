export interface UsuarioI {
  id: string;
  nome: string;
  idade: Number;
  email: string;
  nacionalidade: string;
  descricao: string;
  foto: string;
  genero: string;
  linguaMaterna: string;
  idiomasInterresse: string[];
  tempoDeUso: Number;
  mensagensTotais: Number;
  sessoesTotais: Number;
}
