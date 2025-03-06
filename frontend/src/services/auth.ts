import { fetchWithAuth } from "./api";
import type User from "~/types/user";

interface LoginCredentials {
    email: string;
    password: string;
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
