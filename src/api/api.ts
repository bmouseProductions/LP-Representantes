import sgMail from '@sendgrid/mail';
import FormData from 'form-data';

sgMail.setApiKey('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');

interface PropsFormData {
  nome: string;
  telefone: string;
  email: string;
  tempo: string;
  empresas: string;
  representa: string;
  segmento: string[];
  mensagem: string;
  propostaFile: File | null;
  propostaName: string;
}

export const enviarEmail = async (formData: PropsFormData) => {
  const {
    nome,
    telefone,
    email,
    tempo,
    empresas,
    representa,
    segmento,
    mensagem,
    propostaFile,
    propostaName,
  } = formData;

  const msg = {
    to: 'matheustxr.profissional@gmail.com', // Substitua pelo seu destinatário
    from: email, // Substitua pelo seu remetente
    subject: 'Assunto do E-mail',
    text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nTempo: ${tempo}\nEmpresas: ${empresas}\nRepresenta: ${representa}\nSegmento: ${segmento.join(', ')}\nMensagem: ${mensagem}`,
  };

  try {
    if (propostaFile) {
      const fileContent = await propostaFile.text();
      const blob = new Blob([fileContent], { type: propostaFile.type });

      const form = new FormData();
      form.append('file', blob, propostaName);

      // Enviar o email com o anexo usando a API do SendGrid
      await sgMail.send(msg);

      // Enviar o arquivo anexado
      await sgMail.send({
        to: 'matheustxr.profissional@gmail.com',
        from: email,
        text: 'mensagem do email',
        subject: 'Testando Email',
        attachments: [
          {
            content: form.getBuffer(),
            filename: form.getHeaders()['content-disposition'].split('=')[1],
            type: 'application/pdf', // Defina o tipo apropriado aqui
          },
        ],
      });

      window.alert('Email enviado com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    window.alert('Erro ao enviar o email. Tente novamente.');
  }
};
