import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>This content isnt available at the moment</p>
      <p>
        When this happens, its usually because the owner only shared it with a
        small group of people or changed who can see it, or its been deleted.
      </p>
      <Link href="/">Go to Home</Link>
    </main>
  );
}
