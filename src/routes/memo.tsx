import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/button";
import { useState } from "react";
import { BeanIcon, BeanOffIcon } from "lucide-react";

export const Route = createFileRoute("/memo")({
  component: RouteComponent,
});

const slowFunction = (num: number) => {
  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
};

function RouteComponent() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isBean, setIsBean] = useState(true);

  const doubledRandomNumber = slowFunction(randomNumber);

  return (
    <>
      <h2>useMemo</h2>
      <p>
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          useMemo
        </code>{" "}
        hjälper dig optimera prestandan med hjälp av memoisation. Logiken inom{" "}
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          useMemo
        </code>{" "}
        kommer bara att köras när ett visst värde uppdateras istället för vid
        varje rendering.
      </p>
      <p>
        Varje gång denna komponent renderas om körs{" "}
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          slowFunction
        </code>{" "}
        på nytt, även om användarens interaktion inte har något med den att
        göra. Använd{" "}
        <code className="bg-gray-100 dark:text-black rounded-md px-1">
          useMemo
        </code>{" "}
        och ge den relevanta dependencies så att funktionen bara körs när ett
        nytt slumpmässigt nummer renderas.
      </p>
      <Button onClick={() => setRandomNumber(Math.round(Math.random() * 1000))}>
        Generera slumpmässigt nummer
      </Button>
      <p>(Det slumpmässiga numret gångrat med två är {doubledRandomNumber})</p>
      <Button onClick={() => setIsBean(!isBean)}>
        {isBean ? (
          <BeanIcon className="size-10" />
        ) : (
          <BeanOffIcon className="size-10" />
        )}
      </Button>
    </>
  );
}
