import {
  PortableText,
  type SanityDocument,
  PortableTextComponents,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    description,
    publishedAt,
    author->{
      name, // Fetch author's name
      _id   // Optionally fetch the author's ID or other fields
    },
    image{
      asset->{
        url
      },
      alt
    }
  }`;

const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="ml-6 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="ml-6 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  block: {
    // Handles new line breaks for text blocks
    normal: ({ children }) => (
      <p className="whitespace-pre-line text-slate-700">{children}</p>
    ),

    //Headings
    h2: ({ children }) => (
      <h2 className="font-headings text-2xl text-slate-900">{children}</h2>
    ),
  },
};

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1920).height(1080).url()
    : null;

  console.log(post);

  return (
    <main>
      <div className="relative z-10">
        <Image
          src={postImageUrl}
          alt={post.title}
          width={1920}
          height={1080}
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-50" />
        <div className="px-4 py-32">
          <div className="mx-auto max-w-[80rem]">
            <h2 className="max-w-2xl text-balance font-headings text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h2>
            <p className="mt-4 max-w-xl text-pretty font-body text-xl/8 text-white">
              {post.description}
            </p>
          </div>
        </div>
      </div>
      {/* Floating Content Section */}
      <div className="relative -mt-16 bg-orange-100 px-4 py-8 font-body">
        <div className="mx-auto grid max-w-[80rem] gap-5 md:grid-cols-4 lg:gap-4">
          <div className="prose relative z-20 rounded bg-white p-6 shadow-lg md:col-span-3 lg:p-9">
            <div className="flex max-w-xs divide-x-[1px] divide-slate-300">
              <p className="pr-4">By: {post.author.name}</p>
              <p className="pl-4">
                Published: {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
            <article className="mt-4">
              {Array.isArray(post.body) && (
                <PortableText components={components} value={post.body} />
              )}
            </article>
          </div>
          <aside className="z-20 hidden rounded bg-white p-4 shadow-lg md:col-start-4 md:block">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              veritatis optio aut voluptatum quasi dicta? Ullam, tempora alias.
              Quos nemo esse molestiae hic itaque distinctio est, debitis in
              atque doloribus!
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
