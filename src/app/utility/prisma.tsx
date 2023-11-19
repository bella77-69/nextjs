import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};

export const fetchPostById = async (id: string): Promise<Post> => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return post as Post;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    throw new Error(`Failed to fetch post with ID ${id}`);
  }
};
