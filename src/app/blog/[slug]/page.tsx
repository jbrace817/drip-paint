import { PortableText, type SanityDocument } from "next-sanity";
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
    ? urlFor(post.image)?.width(550).height(310).url()
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
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
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
        <div className="prose relative z-20 mx-auto max-w-[80rem] rounded bg-white p-9 shadow-lg">
          <div className="flex max-w-xs divide-x-[1px] divide-slate-300">
            <p className="pr-4">By: {post.author.name}</p>
            <p className="pl-4">
              Published: {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
          <article className="mt-4 max-w-3xl">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </article>
        </div>
      </div>
    </main>
    // <main className="container mx-auto flex min-h-screen max-w-3xl flex-col gap-4 p-8">
    //   <Link href="/" className="hover:underline">
    //     ← Back to posts
    //   </Link>
    //   {postImageUrl && (
    //     <img
    //       src={postImageUrl}
    //       alt={post.title}
    //       className="aspect-video rounded-xl"
    //       width="550"
    //       height="310"
    //     />
    //   )}
    //   <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
    //   <div className="prose">
    //     <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
    //     {Array.isArray(post.body) && <PortableText value={post.body} />}
    //   </div>
    // </main>
  );
}
