import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-zoomiesrepresentantes.onrender.com",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const enviarEmail = async (formData: any) => {
  return await api.post("/send-email", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Defina o tipo de conteúdo como 'multipart/form-data'
    },
  });
}

export const checkEmail = async (email: string) => {
  return await api.get(`/check-email/${encodeURIComponent(email)}`)
}