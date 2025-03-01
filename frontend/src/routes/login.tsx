import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";
import { authStore } from "~/stores/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  async function handleFormSubmit(event: Event) {
    event.preventDefault();

    const success = await authStore.login(email(), password());
    if (success) {
      navigate("/");
    }
  }

  return (
    <main class="h-full w-full flex items-center justify-center">
      <Title>Login - Discord</Title>
      <div class="p-8 flex flex-col items-center gap-4 rounded">
        <ModeToggle />
        <div class="flex flex-col items-center">
          <h1 class="font-semibold text-primary text-2xl">Ha, te revoilà !</h1>
          <p class="text-muted-foreground">
            Nous sommes si heureux de te revoir !
          </p>
        </div>
        <form class="w-full space-y-4" onSubmit={handleFormSubmit}>
          <TextField class="w-full">
            <TextFieldLabel>Email</TextFieldLabel>
            <TextFieldInput
              type="email"
              id="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </TextField>
          <TextField>
            <TextFieldLabel>Password</TextFieldLabel>
            <TextFieldInput
              type="password"
              id="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </TextField>

          <Button type="submit" class="w-full">
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
