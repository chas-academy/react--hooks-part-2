import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/button";

export const Route = createFileRoute("/context")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h2>useContext</h2>
      <p>
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          useContext
        </code>{" "}
        är en hook som låter dig komma åt värden inom samma komponentträd utan
        att behöva passa ned dem med prop drilling. Om en context omsluter hela
        applikationen är dess värde globalt tillgänligt.
      </p>
      <p>
        Skapa och använd en context för att göra state-variabeln{" "}
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          profileIndex
        </code>{" "}
        i{" "}
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          __root.tsx
        </code>{" "}
        globalt tillgänglig och skriv logik som låter dig toggla värdet direkt
        härifrån.
      </p>
      <Button onClick={() => {}}>Toggla profilbild</Button>
    </>
  );
}
