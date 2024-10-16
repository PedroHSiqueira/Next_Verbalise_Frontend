import { IdiomaUsuarioI } from "@/utils/types/idiomaUsuario";

export default function ItemLanguage({data}: {data: IdiomaUsuarioI}) {
    let lingua;
    if(data.idiomaId == 3) {
        lingua = 'Inglês - US';
    }else if(data.idiomaId == 4) {
        lingua = 'Português - BR';
    }else{
        lingua = 'Aguardando dados';
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
