//app/blogpost/[slug]/page.js
import { notFound } from "next/navigation";
import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import OnThisPage from "@/components/onthispage";
import "./styles.css";

export async function generateStaticParams() {
  const files = fs.readdirSync("content");
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Page({ params }) {
  const slug = params.slug;
  const filepath = `content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || "Untitled" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Header Section with Image */}
        <div className="flex justify-between">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base mb-2 border-l-4 border-gray-500 pl-4 italic text-gray-600">
              &quot;{data.description}&quot;
            </p>
            <div className="flex gap-4 flex-wrap mb-4">
              <p className="text-xs sm:text-sm text-gray-500 italic">
                By {data.author}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{data.date}</p>
            </div>
          </div>
          <div>
            <OnThisPage htmlContent={htmlContent} />
          </div>
        </div>

        {/* Content Section */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl mb-8"
        ></div>

        {/* Table of Contents */}
      </div>
    </div>
  );
}
