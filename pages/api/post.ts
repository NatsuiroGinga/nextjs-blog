import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { Post } from "@/components/posts";

const postsDirectory = path.join(process.cwd(), 'public/posts')

/**
 * 获取所有文章的名称数组
 * @author ginga
 * @since 10/12/2022 上午9:00
 * @return 所有文章的路径数组
 **/
const getPostFiles = (): string[] => {
  return fs.readdirSync(postsDirectory);
}

/**
 * 获取所有精选文章的名称数组
 * @author ginga
 * @since 10/12/2022 上午9:00
 * @return 所有精选文章的路径数组
 **/
const getFeaturedPostFiles = (): string[] => {
  const featuredPosts = getFeaturedPosts();
  return featuredPosts.map(post => post.slug);
}

/**
 * 获取某篇文章内容
 * @author ginga
 * @since 10/12/2022 上午8:59
 * @param postIdentifier 文章唯一标识符
 * @return 文章内容
 **/
const getPostData = (postIdentifier: string): Post => {
  const postSlug = postIdentifier.replace(/\.mdx$/, '').replace(/\.md$/, '');
  const filepath = path.join(postsDirectory, `${ postSlug }.md`);
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug, // remove file extension for page
    ...data, // spread data from frontmatter
    content, // content from markdown file
  } as Post;
}

/**
 * 获取所有文章内容
 * @author ginga
 * @since 10/12/2022 上午8:58
 * @return 所有文章内容
 **/
const getAllPosts = (): Post[] => {
  const postFiles = getPostFiles();

  return postFiles.map(postFile => getPostData(postFile))
                  .sort((a, b) => {
                    return (a.date < b.date ? 1 : -1);
                  });
}

/**
 * 获取精选文章内容
 * @author ginga
 * @since 10/12/2022 上午8:58
 * @return 精选文章内容
 **/
const getFeaturedPosts = (): Post[] => {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.isFeatured);
}

export {
  getAllPosts,
  getFeaturedPosts,
  getPostData,
  getPostFiles,
  getFeaturedPostFiles,
};