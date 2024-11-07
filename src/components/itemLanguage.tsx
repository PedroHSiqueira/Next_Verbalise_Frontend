import { IdiomaUsuarioI } from '@/utils/types/idiomaUsuario';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function ItemLanguage({ data }: { data: IdiomaUsuarioI }) {
  let lingua;
  if (data.idiomaId == 1) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Português</h3>
        <span className="fi fi-br"></span>
      </div>
    );
  } else if (data.idiomaId == 2) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Inglês</h3>
        <span className="fi fi-us"></span>
      </div>
    );
  } else if (data.idiomaId == 3) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Japonês</h3>
        <span className="fi fi-jp border-black"></span>
      </div>
    );
  } else if (data.idiomaId == 4) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Mandarim</h3>
        <span className="fi fi-cn"></span>
      </div>
    );
  } else if (data.idiomaId == 5) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Alemão</h3>
        <span className="fi fi-de"></span>
      </div>
    );
  } else if (data.idiomaId == 6) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Espanhol</h3>
        <span className="fi fi-es"></span>
      </div>
    );
  } else if (data.idiomaId == 7) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Francês</h3>
        <span className="fi fi-fr"></span>
      </div>
    );
  } else if (data.idiomaId == 8) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Coreano</h3>
        <span className="fi fi-kr border-black"></span>
      </div>
    );
  } else if (data.idiomaId == 9) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Tagalog</h3>
        <span className="fi fi-ph "></span>
      </div>
    );
  } else if (data.idiomaId == 10) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Russo</h3>
        <span className="fi fi-ru"></span>
      </div>
    );
  } else if (data.idiomaId == 11) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Indonésio</h3>
        <span className="fi fi-id "></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div>
        <h2 className="bg-white text-center p-4 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          {lingua}
        </h2>
      </div>
    </div>
  );
}
