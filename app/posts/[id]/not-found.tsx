import Link from "next/link";

export default function PostNotFound() {
  return (
    <main className="rounded-lg bg-green-600 p-6 text-center text-white">
      <h2 className="text-2xl font-bold">Post not found</h2>
      <p className="mt-2 text-sm opacity-90">
        That post ID does not exist in JSONPlaceholder.
      </p>
      <Link
        href="/posts"
        className="mt-6 inline-block text-sm font-medium text-amber-200 underline-offset-2 hover:underline"
      >
        ← Back to all posts
      </Link>
    </main>
  );
}
