import sgMail from '@sendgrid/mail';
//import FormData from 'form-data';

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

export const enviarEmail = async (formData:PropsFormData) => {
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
  
  const message = {
    to: 'matheustxr.profissional@gmail.com',
    from: email,
    subject: 'Quero ser um representantes Zoomies',
    html: `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Tempo:</strong> ${tempo}</p>
      <p><strong>Empresas:</strong> ${empresas}</p>
      <p><strong>Representa:</strong> ${representa}</p>
      <p><strong>Segmento:</strong> ${segmento.join(', ')}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `,
  };
  
  if (propostaFile) {
    const reader = new FileReader();
    reader.readAsDataURL(propostaFile);
    reader.onload = async () => {
      const fileContent = reader.result as string;
  
      sgMail.setApiKey('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');
  
      const emailMessage = {
        to: 'matheustxr.profissional@gmail.com',
        from: email,
        subject: 'Quero ser um representante Zoomies',
        html: `
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Tempo:</strong> ${tempo}</p>
          <p><strong>Empresas:</strong> ${empresas}</p>
          <p><strong>Representa:</strong> ${representa}</p>
          <p><strong>Segmento:</strong> ${segmento.join(', ')}</p>
          <p><strong>Mensagem:</strong> ${mensagem}</p>
        `,
        attachments: [
          {
            content: fileContent.split(',')[1],
            filename: propostaName,
            type: propostaFile.type,
          },
        ],
      };
  
      try {
        await sgMail.send(emailMessage);
        window.alert('Email enviado com sucesso!');
        console.log(message)
      } catch (error) {
        console.error('Erro ao enviar o email:', error);
        console.log(message)
        window.alert('Erro ao enviar o email. Tente novamente.');
      }
    };
  } else {

    sgMail.setApiKey('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');
  
    try {
      await sgMail.send(message); // Aqui você está reutilizando a 'message' anterior
      console.log(message)
      window.alert('Email enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      console.log(message)
      window.alert('Erro ao enviar o email. Tente novamente.');
    }
  }
};
