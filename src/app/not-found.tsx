import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">404 · A different direction</p>
      <h1>This page isn’t on the map.</h1>
      <p>There’s still plenty to discover. Let’s head back to the start.</p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </div>
  );
}
