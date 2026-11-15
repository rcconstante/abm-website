"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="container not-found" role="alert">
      <h1>We couldn’t open this page.</h1>
      <p>Please try again to continue exploring ABM.</p>
      <button onClick={reset} className="button button-primary">
        Try again
      </button>
    </div>
  );
}
