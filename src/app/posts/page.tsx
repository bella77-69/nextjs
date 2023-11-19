import { fetchPosts } from '../utility/prisma';
import Link from 'next/link';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
    posts: string;
  };
}) {
  const id = searchParams?.id || '';
  const post = searchParams?.posts || '';
  const posts = await fetchPosts();
  // const posts = await fetchPosts(id, post);
  return (
    <div className="w-full">
      <div className="container mx-auto my-10 px-7"> 
              <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
              {posts.map((post) => (
                <div key={post.id} className="bg-white p-4 mb-4 shadow-md">
                  <Link href={`/posts/${post.id}`}>
                    <p className="text-xl font-bold">{post.title}</p>
                  </Link>
                  {/* <p className="text-gray-700">{post.body}</p> */}
                </div>
              ))}
  
      </div>

    </div>
  );
}