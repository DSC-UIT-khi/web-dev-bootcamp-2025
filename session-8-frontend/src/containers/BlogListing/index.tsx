import { BlogType } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogListingProps {
  blogs: BlogType[];
}

const BlogListing: React.FC<BlogListingProps> = ({ blogs }) => {
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h1 className="text-center text-4xl font-bold">Blogs </h1>

      <article className="my-10 flex flex-wrap">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="max-w-2xs">
            <Link href={`/blog/${blog._id}`} className=" flex flex-col gap-2">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={300}
                className="rounded-md"
              />
              <h3 className="font-semibold text-xl">{blog.title}</h3>
              <p className="text-ellipsis line-clamp-2">{blog.description}</p>
              <div className="flex gap-2">
                {blog.tags.map((tag) => (
                  <p key={tag}>#{tag}</p>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
};

export default BlogListing;
