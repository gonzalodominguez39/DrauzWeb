export type SignupRequest = {
  email: string;
  password: string;
  role?: string;
};

export type SignupResponse = {
  id: string;
  email: string;
  role: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  email: string;
  role: string;
};
