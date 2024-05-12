'use client';
import blogPosts from '@/src/utils/constants/blogPosts.json';
import Image from 'next/image';

const BlogPosts = () => {
  const componentName = 'BLOG_POSTS';
  return (
    <div>
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className='flex flex-col gap-4 justify-center items-center py-8'
        >
          <h3 className='w-full text-left md:text-4xl'>{post.title}</h3>
          <div
            className={`${componentName}_IMAGE_CONTAINER relative h-[25dvh] w-[90dvw] md:h-[35dvh] lg:h-[45dvh] xl:h-[50dvh] my-4`}
          >
            <Image
              src={`/assets/${post.imageURL}`}
              alt={post.title}
              fill
              sizes='100'
              className='object-cover floating_container'
            />
          </div>

          <div
            className='flex flex-col gap-4'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <a href="/about" className='text_links'>Author: {post.author}</a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
