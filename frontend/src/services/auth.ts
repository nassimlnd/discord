import { fetchWithAuth } from "./api";

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  displayName: string;
}

export async function login(credentials: LoginCredentials) {
  return fetchWithAuth("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function logout() {
  return fetchWithAuth("/logout", {
    method: "POST",
  });
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    return await fetchWithAuth("/me");
  } catch (error) {
    console.error("Failed to get current user.");
    return null;
  }
}
