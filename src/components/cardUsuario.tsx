import { UsuarioI } from "@/utils/types/usuarios";




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

    return (

        
            <div className="border rounded-lg max-w-[506px] max-h-[266px] p-4 shadow bg-[#f3efe5]">
                <div className="flex items-center mb-4">
                    <img
                        className="w-16 h-16 rounded-full"
                        src={data.foto}
                        alt="Foto"
                    />
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold">
                            {data.nome} {idadeConvertida}
                        </h2>
                        <p className="text-sm">Nacionalidade: {data.nacionalidade}</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                    {data.descricao}
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-2">Fala: </span>
                        <img
                            className="w-8 h-8"
                            src="./Bandeiras/france.png"
                            alt="França"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Aprende:</span>
                        <img
                            className="w-8 h-8"
                            src="./Bandeiras/brazil.png"
                            alt="Brasil"
                        />
                    </div>
                </div>
            </div>
        
    );
};