import User from "~/types/user";
import { UserContext } from "./context";

interface UserContextProviderProps {
    user: User;
    children: any;
}

export const Provider = (props: UserContextProviderProps) => {
    return <UserContext.Provider value={props.user}>{props.children}</UserContext.Provider>;
};
