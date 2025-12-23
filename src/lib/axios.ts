import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants/api";
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Puedes personalizar el manejo de errores aquí
    const message =
      error.response?.data?.message || error.message || "Error en la petición";
    return Promise.reject(new Error(message));
  }
);
