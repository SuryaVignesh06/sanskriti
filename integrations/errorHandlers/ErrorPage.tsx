import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div style={{ padding: '2rem', color: 'red' }}>
      <h1>Application Error</h1>
      <pre>{error.message || String(error)}</pre>
    </div>
  );
};
