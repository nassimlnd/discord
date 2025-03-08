import { Title } from "@solidjs/meta";
import { onMount } from "solid-js";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { useUser } from "~/context/user-context";

export default function Home() {
    const user = useUser();

    return (
        <main>
            <Title>Accueil</Title>
            <Avatar>
                <AvatarFallback>{user?.displayName[0]}</AvatarFallback>
            </Avatar>
        </main>
    );
}
