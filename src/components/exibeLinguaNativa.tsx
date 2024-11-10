import { idiomasNativos } from "@/utils/types/idiomasNativos";
import { UsuarioI } from "@/utils/types/usuarios";

export function exibeLinguaNativa(usuario: UsuarioI) {
  const idioma = idiomasNativos[usuario.linguaMaternaId];

  return idioma ? (
    <div className="flex items-center justify-center gap-3">
      <h3>{idioma.nome}</h3> 
      <span className={idioma.iconClass}></span>
    </div>
  ) : (
    <h3>Idioma não especificado</h3>
  );
}
