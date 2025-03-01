import { Title } from "@solidjs/meta";
import { Button } from "~/components/ui/button";
import { authStore } from "~/stores/auth";

export default function Home() {
  const currentUser = authStore.user;

  return (
    <main>
      <Title>Hello World</Title>
      <div>{currentUser()?.displayName}</div>
    </main>
  );
}
