import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-zoomiesrepresentantes.onrender.com',
});

interface PropsFormData {
  nome: string;
  telefone: string;
  email: string;
  tempo: string;
  empresas: string;
  representa: string;
  segmento: string;
  mensagem: string;
  propostaFile: File | null;
  propostaName: string;
}

export const enviarEmail = async (formData: PropsFormData) => {
  const { nome, telefone, email, tempo, empresas, representa, segmento, mensagem, propostaFile, propostaName } = formData;

  const formDataToSend = new FormData();
  formDataToSend.append('nome', nome);
  formDataToSend.append('telefone', telefone);
  formDataToSend.append('email', email);
  formDataToSend.append('tempo', tempo);
  formDataToSend.append('empresas', empresas);
  formDataToSend.append('representa', representa);
  formDataToSend.append('segmento', segmento);
  formDataToSend.append('mensagem', mensagem);

  if (propostaFile) {
    formDataToSend.append('propostaFile', propostaFile, propostaName);
  }

  try {
    const response = await api.post('/send', formDataToSend, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (response.status === 200) {
      window.alert('Email enviado com sucesso!');
    } else {
      window.alert('Erro ao enviar o email. Tente novamente.');
    }
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    window.alert('Erro ao enviar o email. Tente novamente.');
  }
};
