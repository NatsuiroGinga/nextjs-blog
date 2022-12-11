interface postImageConfig {
  image: string; // 文章图片名
  slug: string; // 文章唯一标识
}

/**
 * 文章图片完整路径加载器
 * @author ginga
 * @since 8/12/2022 下午10:26
 * @param image 文章图片名
 * @param slug 文章唯一标识(图片所在文件夹名)
 * @return 图片完整路径
 **/
const postImageLoader = ({ image, slug }: postImageConfig) => {
  return `/images/posts/${ slug }/${ image }`;
}

/**
 * 文章完整路径加载器
 * @author ginga
 * @since 8/12/2022 下午10:23
 * @param slug 文章唯一标识符(slug格式)
 * @return 文章路径
 **/
const postLoader = (slug: string) => {
  return `/posts/${ slug }`;
}

export {
  postImageLoader,
  postLoader
};