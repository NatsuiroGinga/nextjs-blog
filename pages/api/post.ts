import { handler } from "@/utils";
import fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'public/posts')

const getPostData = (filename: string): Post => {
  const filepath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    slug: filename.replace(/\.md$/, ''), // remove file extension for page
    ...data, // spread data from frontmatter
    content, // content from markdown file
  } as Post;
}

const getAllPosts = (): Post[] => {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles.map(postFile => getPostData(postFile))
                  .sort((a, b) => {
                    return (a.date < b.date ? 1 : -1);
                  });
}

const getFeaturedPosts = (): Post[] => {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.isFeatured);
}

export default handler;
export {
  getAllPosts,
  getFeaturedPosts,
};