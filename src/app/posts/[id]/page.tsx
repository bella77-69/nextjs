import { fetchPostById } from "../../utility/prisma";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const id = params.id;

  try {
    const post: Post | undefined = await fetchPostById(id);

    if (!post) {
      return <div>Post not found</div>;
    }

    return (
      <main className="container mx-auto p-4 px-7 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 p-4">
          {post.title}
        </h1>
        <p className="text-gray-700 p-4">{post.body}</p>
        <Link href="/posts">
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Posts
          </button>
        </Link>
      </main>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="container mx-auto p-4 px-7 min-h-screen">
        Error fetching post
      </div>
    );
  }
}
