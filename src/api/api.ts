import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-zoomiesrepresentantes.onrender.com",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const enviarEmail = async (formData:any) => {
  try {
    const response = await api.post("/send-email", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      window.alert("Email enviado com sucesso!");
    } else {
      window.alert("Erro ao enviar o email. Tente novamente.");
    }
    return response;
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    window.alert("Erro ao enviar o email. Tente novamente.");
  }
};

export const checkEmail = async (email: string) => {
  return await api.get(`/check-email/${encodeURIComponent(email)}`)
}