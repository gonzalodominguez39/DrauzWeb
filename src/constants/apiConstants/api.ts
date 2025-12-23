export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const ROUTES = {
  signup: `/auth/signup`,
  login: `/auth/signin`,
};
