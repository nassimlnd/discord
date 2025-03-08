import { createContext, useContext } from "solid-js";
import User from "~/types/user";

interface UserContextType {
    user: User | null;
}

export const UserContext = createContext<User | null>(undefined);

export const useUser = () => useContext(UserContext);
