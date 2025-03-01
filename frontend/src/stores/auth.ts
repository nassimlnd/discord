import { createResource, createSignal } from "solid-js";
import {
  getCurrentUser,
  login as loginApi,
  logout as logoutApi,
} from "~/services/auth";

export function createAuthStore() {
  const [isLoading, setIsLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [user, { refetch }] = createResource(getCurrentUser);

  async function login(email: string, password: string) {
    setIsLoading(true);
    setError(null);

    try {
      await loginApi({ email, password });
      refetch();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Échec de la connexion");
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    setIsLoading(true);
    try {
      await logoutApi();
      refetch();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Échec de la déconnexion");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: () => user() !== null,
  };
}

export const authStore = createAuthStore();
