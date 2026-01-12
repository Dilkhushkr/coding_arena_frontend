import api from "./api";

/* ---------- Types ---------- */

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload extends LoginPayload {
  name: string;
}

/* ---------- APIs ---------- */

export const signupApi = async (data: SignupPayload) => {
  try {
    const response = await api.post("/account/register/", data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "Signup failed";
  }
};

export const loginApi = async (data: LoginPayload) => {
  try {
    const response = await api.post("/account/login/", data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "Login failed";
  }
};

export const logoutApi = async ()=> {
  return api.post("/account/logout/");
}
