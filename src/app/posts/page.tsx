import { fetchPosts } from "../utility/prisma";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Page() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Blog Posts</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <Link href={`/posts/${post.id}`}>
                <p className="block text-xl font-bold text-gray-500 hover:text-blue-700 mb-4">
                  {post.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}