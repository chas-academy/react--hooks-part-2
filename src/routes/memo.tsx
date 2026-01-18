import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/memo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h2>useMemo</h2>
      <p></p>
    </>
  );
}
