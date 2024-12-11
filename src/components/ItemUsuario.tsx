import {UsuarioI} from "@/utils/types/usuarios";
import Link from "next/link";

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

  function getIdiomaImagem(id: number) {
    switch (id) {
      case 1:
        return "brazil";
      case 2:
        return "usa";
      case 3:
        return "japan";
      case 4:
        return "china";
      case 5:
        return "germany";
      case 6:
        return "spain";
      case 7:
        return "france";
      case 8:
        return "korea";
      case 9:
        return "tagalog";
      case 10:
        return "russia";
      case 11:
        return "indonesia";
      default:
        return "brazil";
    }
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
            <img className="w-8 h-8" src={`./Bandeiras/${imagemLinguaNativa}.png`} />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Aprende:</span>
            {data.idiomasInterresse.slice(0, 2).map((idiomaId: any) => {
              return <img key={idiomaId} className="w-8 h-8 ml-2" src={`./Bandeiras/${getIdiomaImagem(idiomaId.idiomaId)}.png`} />;
            })}
            {data.idiomasInterresse.length > 2 && <span className="mx-2 text-3xl">+</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
