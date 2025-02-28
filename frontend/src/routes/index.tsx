import { Title } from "@solidjs/meta";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1 class="text-2xl">Hello world!</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
