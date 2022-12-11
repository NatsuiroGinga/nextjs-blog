// 完整文章
interface Post extends PostMeta {
  content: string;
}

// 文章md文件元数据
interface PostMeta {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
}

export type {
  Post,
  PostMeta
}