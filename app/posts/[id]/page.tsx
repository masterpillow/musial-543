import Link from "next/link";
import { notFound } from "next/navigation";
import type { JsonPlaceholderPost } from "../../../types/types";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

async function getPost(id: string): Promise<JsonPlaceholderPost | null> {
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId < 1) {
    return null;
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${numericId}`,
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to load post");
  }

  return res.json();
}

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="rounded-lg bg-green-600 p-6 text-white">
      <p className="text-center">
        <Link
          href="/posts"
          className="text-sm font-medium text-amber-200 underline-offset-2 hover:underline"
        >
          ← All posts
        </Link>
      </p>

      <article className="mt-4 rounded-lg bg-yellow-600 p-6 text-left text-gray-900 shadow">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-700">
          Post #{post.id} · User {post.userId}
        </p>
        <h1 className="mt-2 text-2xl font-bold">{post.title}</h1>
        <p className="mt-4 whitespace-pre-wrap text-base leading-relaxed">
          {post.body}
        </p>
      </article>
    </main>
  );
}
