import { fetchPostById } from "../../utility/prisma";

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
      <main className="container mx-auto p-4 px-7">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </main>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error fetching post</div>;
  }
}
