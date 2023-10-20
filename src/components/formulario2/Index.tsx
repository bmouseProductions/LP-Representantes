import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api.js";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
  tempo: string;
  empresas: string;
  representa: string;
  segmento: string[];
  propostaFile: File | null;
  propostaName: string;
}

const segmentos = [
  { segmento: "Ração pet" },
  { segmento: "Medicamento grandes animais" },
  { segmento: "Medicamento pequenos animais" },
  { segmento: "Insumos" },
  { segmento: "Ração grandes animais" },
  { segmento: "Acessórios para pet" },
];

export const Formulario2 = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
    tempo: "",
    empresas: "",
    representa: "",
    segmento: [], // Alterado para array para armazenar múltiplas seleções
    mensagem: "",
    propostaFile: null,
    propostaName: "",
  });

  const propostaFileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileUpload = () => {
    const file = propostaFileRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Arquivo:", reader.result);
        setFormData((prevData) => ({
          ...prevData,
          propostaFile: file,
          propostaName: file.name
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSegmentoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedSegmento = [...prevData.segmento];
      if (updatedSegmento.includes(value)) {
        // Remove o segmento se já estiver selecionado
        updatedSegmento.splice(updatedSegmento.indexOf(value), 1);
      } else {
        // Adicione o segmento se não estiver selecionado
        updatedSegmento.push(value);
      }
      return {
        ...prevData,
        segmento: updatedSegmento,
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        required
        onChange={handleChange}
        className="mb-5 h-[40px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        required
        onChange={handleChange}
        className="mb-5 h-[40px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        required
        onChange={handleChange}
        className="mb-5 h-[40px] md:w-[600px] rounded text-black px-2"
      />

      

      <label htmlFor="tempo">Há quanto tempo você trabalha como representante comercial?</label>
      <input
        id="tempo"
        type="text"
        name="tempo"
        required
        onChange={handleChange}
        className="mb-5 h-[40px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="empresas">Com quais empresas você já trabalhou?</label>
      <input
        id="empresas"
        type="text"
        name="empresas"
        required
        onChange={handleChange}
        className="mb-5 h-[40px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="representa">Você tem sua própria empresa? Quais empresas você representa com a sua empresa?</label>
      <input
        id="representa"
        type="text"
        name="representa"
        required
        onChange={handleChange}
        className="mb-5 h-[40px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="segmento">Qual seu segmento de trabalho</label>
      <div className="flex flex-col flex-wrap md:max-h-20">
        {segmentos.map((segmentoItem) => (
          <label key={segmentoItem.segmento} className="md:w-[50%]">
            <input
              type="checkbox"
              name="segmento"
              value={segmentoItem.segmento}
              checked={formData.segmento.includes(segmentoItem.segmento)}
              onChange={handleSegmentoChange}
              className=""
            />
            {segmentoItem.segmento}
          </label>
        ))}
      </div>

      <label htmlFor="mensagem" className="mt-5">Mensagem:</label>
      <textarea
        id="mensagem"
        name="mensagem"
        required
        rows={5}
        onChange={handleChange}
        className="mb-5 md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="proposta">Envie sua apresentação ou currículo.</label>
      <input
        id="proposta"
        type="file"
        name="proposta"
        ref={propostaFileRef}
        onChange={handleFileUpload}
        className="mb-5"
      />

      <Button
        type="submit"
        variant="contained"
        id="styleButton"
        endIcon={<SendIcon />}
      >
        Enviar
      </Button>
    </form>
  );
};
