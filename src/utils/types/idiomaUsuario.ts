import { IdiomaI } from "./idioma";
import { UsuarioI } from "./usuarios";

export interface IdiomaUsuarioI {
    id: string;
    linguaMaternaId: number;
    idioma: IdiomaI;
    usuario: UsuarioI;
  }
  