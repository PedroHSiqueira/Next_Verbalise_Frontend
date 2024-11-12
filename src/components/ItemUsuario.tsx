import { UsuarioI } from "@/utils/types/usuarios";
import Link from "next/link";
import { useEffect } from "react";

export default function ItemUsuario({ data }: { data: UsuarioI }) {
  function calculaIdade(dataNascimento: string) {
    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    const mes = dataAtual.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNasc.getDate())) {
      idade -= 1;
    }
    return idade;
  }
  const idadeConvertida = Math.abs(calculaIdade(data.nascimento));

let imagemLinguaNativa;
switch (data.linguaMaternaId) {
  case 1:
    imagemLinguaNativa = "brazil";
    break;
  case 2:
    imagemLinguaNativa = "usa";
    break;
  case 3:
    imagemLinguaNativa = "japan";
    break;
  case 4:
    imagemLinguaNativa = "china";
    break;
  case 5:
    imagemLinguaNativa = "germany";
    break;
  case 6:
    imagemLinguaNativa = "israel";
    break;
  case 7:
    imagemLinguaNativa = "france";
    break;
  case 8:
    imagemLinguaNativa = "greece";
    break;
  case 9:
    imagemLinguaNativa = "tagalog";
    break;
  case 10:
    imagemLinguaNativa = "arabic";
    break;
  case 11:
    imagemLinguaNativa = "indonesia";
    break;
  default:
    imagemLinguaNativa = "brazil";
    break;
}

  return (
    <Link href={`/detalhes/${data.id}`}>
        <div className="border rounded-lg max-w-[506px] min-h-[242px] max-h-[300px] p-4 shadow bg-[#f3efe5] md:min-h-[242px]">
          <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-full" src={data.foto} alt="Foto" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">
                {data.nome} {idadeConvertida}
              </h2>
              <p className="text-sm">Nacionalidade: {data.nacionalidade}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm min-h-32 mb-4 lg:min-h-[140px] xl:min-h-[90px]">{data.descricao}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="mr-2">Fala: </span>
              <img className="w-8 h-8" src={`./Bandeiras/${imagemLinguaNativa}.png`}/>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Aprende:</span>
              <img className="w-8 h-8" src={`./Bandeiras/brazil.png`}/>
              {/* {data.idiomasInterresse.slice(0, 2).map((lingua, index) => {
                const linguaId = data.idiomasInterresse[index];
                let imagemLingua;
                switch (lingua) {
                  case "brazil":
                    imagemLingua = "brazil";
                    break;
                  case "usa":
                    imagemLingua = "usa";
                    break;
                  case "japan":
                    imagemLingua = "japan";
                    break;
                  case "china":
                    imagemLingua = "china";
                    break;
                  case "germany":
                    imagemLingua = "germany";
                    break;
                }
                return <img key={index} className="w-8 h-8 mr-1" src={`./Bandeiras/${lingua}.png`} alt={lingua} />;
              })}
              {data.idiomasInterresse.length > 2 && <span>+</span>} */}
            </div>
          </div>
        </div>
    </Link>
  );
}
