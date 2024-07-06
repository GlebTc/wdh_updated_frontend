'use client';
import Image from 'next/image';

const BlogPosts = (blog: any) => {
  const componentName = 'BLOG_POSTS';
  return (
    <div className='flex flex-col gap-4 justify-center items-center py-8'>
      <h1 className=''>{blog.blog.title}</h1>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-[25dvh] w-[90dvw] md:h-[35dvh] lg:h-[45dvh] xl:h-[50dvh] my-4`}
      >
        <Image
          src={`/assets/blog_items/${blog.blog.imageURL}`}
          alt={blog.blog.title}
          fill
          sizes='100'
          className='object-cover floating_container'
        />
      </div>
      <div
        className='flex flex-col gap-4'
        dangerouslySetInnerHTML={{ __html: blog.blog.content }}
      />
      <a
        href='/about'
        className='text_links'
      >
        Author: {blog.blog.author}
      </a>
    </div>
  );
};

export default BlogPosts;
