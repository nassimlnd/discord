import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { getCurrentUser } from "~/services/auth";
import User from "~/types/user";

export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = createSignal<User>();

    createEffect(async () => {
        const user = await getCurrentUser();

        if (user) {
            setUser(user);
        } else {
            navigate("/login");
        }
    });

    return (
        <main>
            <Title>Accueil</Title>
            <Avatar>
                <AvatarFallback>{user()?.displayName[0]}</AvatarFallback>
            </Avatar>
        </main>
    );
}
