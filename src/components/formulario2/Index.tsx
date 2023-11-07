import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { checkEmail, enviarEmail } from "../../api/api";
import { Button } from "@mui/material";
import axios from "axios";
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
  const [emailExists, setEmailExists] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false); // Estado para controlar o loading
  const [isSending, setIsSending] = useState(false);
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


  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSegmentoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedSegmento = [...prevData.segmento];
      if (updatedSegmento.includes(value)) {
        updatedSegmento.splice(updatedSegmento.indexOf(value), 1);
      } else {
        updatedSegmento.push(value);
      }
      return {
        ...prevData,
        segmento: updatedSegmento,
      };
    });
  };

  const handleCadastro = async (
    email: string,
    nome: string,
    telefone: string,
    empresas: string,
    tempo: string,
    representa: string,
    segmento: string | string[],
    mensagem: string
  ) => {
    try {
      const serverURL = "http://localhost:3000/cadastro";

      const response = await axios.post(serverURL, {
        email,
        nome,
        telefone,
        empresas,
        representa,
        segmento,
        mensagem,
      });

      const emailResponse = await enviarEmail({
        email,
        nome,
        telefone,
        empresas,
        tempo,
        representa,
        segmento,
        mensagem,
      });

      console.log("Resposta do servidor Node.js:", response.data);
      //console.log("Email enviado:", emailResponse.data);

      alert("Cadastro realizado com sucesso!");

      setEmailExists(false);
    } catch (error) {
      console.error("Erro ao cadastrar o email:", error);
    }
  };

  const propostaFileRef = useRef<HTMLInputElement | null>(null);

  const handleCheckEmail = async (email: string) => {
    try {
      const checkResponse = await checkEmail(email);

      if (checkResponse.status === 200) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
      }
    } catch (error) {
      console.error("Erro ao verificar email:", error);
    }
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
          propostaName: file.name,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    )?.value;
    const nome = (
      e.currentTarget.elements.namedItem("nome") as HTMLInputElement
    )?.value;
    const telefone = (
      e.currentTarget.elements.namedItem("telefone") as HTMLInputElement
    )?.value;
    const tempo = (
      e.currentTarget.elements.namedItem("tempo") as HTMLInputElement
    )?.value;
    const empresas = (
      e.currentTarget.elements.namedItem("empresas") as HTMLInputElement
    )?.value;
    const representa = (
      e.currentTarget.elements.namedItem("representa") as HTMLInputElement
    )?.value;
    const segmento = (
      e.currentTarget.elements.namedItem("segmento") as HTMLInputElement
    )?.value;
    const mensagem = (
      e.currentTarget.elements.namedItem("mensagem") as HTMLTextAreaElement
    )?.value;

    await handleCheckEmail(email);

    await handleCadastro(
      email,
      nome,
      telefone,
      empresas,
      tempo,
      representa,
      segmento,
      mensagem
    );

    if (emailExists) {
      setLoading(false); // Desativar o loading
      return;
    }

    try {
      await enviarEmail(formData);
      setIsSending(true)
    } catch (error) {
      console.error("Something is wrong", error);
    } finally{
      setIsSending(false)
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

      <label htmlFor="tempo">
        Há quanto tempo você trabalha como representante comercial?
      </label>
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

      <label htmlFor="representa">
        Você tem sua própria empresa? Quais empresas você representa com a sua
        empresa?
      </label>
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

      <label htmlFor="mensagem" className="mt-5">
        Mensagem:
      </label>
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
        disabled={isSending}
      >
        Enviar
      </Button>
    </form>
  );
};
