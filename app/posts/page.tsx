import Link from "next/link";
import type { JsonPlaceholderPost } from "../../types/types";

export const dynamic = "force-dynamic";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(): Promise<JsonPlaceholderPost[]> {
  const res = await fetch(POSTS_URL);
  if (!res.ok) {
    throw new Error("Failed to load posts");
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="rounded-lg bg-green-600 p-6 text-white">
      <h2 className="text-2xl font-bold text-center">&lt;Posts&gt;</h2>
      <p className="mt-2 text-center text-sm opacity-90">
        Data from{" "}
        <a
          href="https://jsonplaceholder.typicode.com/"
          className="underline hover:text-amber-200"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder
        </a>{" "}
        (<code className="rounded bg-black/20 px-1">/posts</code>)
      </p>

      <ul className="mt-6 space-y-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="rounded-lg bg-yellow-600 p-4 text-left text-gray-900 shadow"
          >
            <Link
              href={`/posts/${post.id}`}
              className="font-semibold text-gray-900 underline-offset-2 hover:underline"
            >
              {post.title}
            </Link>
            <p className="mt-2 line-clamp-2 text-sm text-gray-800">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
