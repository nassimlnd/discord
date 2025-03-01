export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3333";

export async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {}
) {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Erreur ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return response;
}
