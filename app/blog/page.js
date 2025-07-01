import React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 *
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Main heading for the blog section */}
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 dark:text-gray-200">
          Explore Our Blogs
        </h1>

        {/* Grid layout for blog posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/blogpost/${blog.slug}`}>
                {/* Blog post image */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500} // Adjust width based on your requirement
                  height={256} // Adjust height based on your requirement
                  className="object-fill"
                  style={{ width: "100%", height: "16rem" }} // For responsive styling
                  placeholder="blur" // Optional: if you want to use blur placeholder
                  blurDataURL="/path/to/placeholder/image" // Optional: if using placeholder
                />

                {/* Blog post content */}
                <div className="p-6">
                  {/* Blog post title */}
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {blog.title}
                  </h2>

                  {/* Blog post description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.description}
                  </p>

                  {/* Blog post author and date */}
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>By {blog.author}</span> |{" "}
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Link to the full blog post */}
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
