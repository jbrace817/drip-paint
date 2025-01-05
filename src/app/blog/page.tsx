import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post"] |order(publishedAt desc)[0...12] {
  title,
  slug,
  publishedAt,
  description,
  "author": author->{
    _id,
    name,
    "bio": bio[] {
      children[] {
        text
      }
    },
    image
  },
  image {
    asset->{
      _id,
      url
    }
  }
}`;

const { projectId, dataset } = client.config();

//Image
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

//bio
interface Span {
  text: string;
}

interface Block {
  children?: Span[];
}

const parseBio = (bio: Block[]): string => {
  if (!bio || !Array.isArray(bio)) return "";

  return bio
    .map((block) => block.children?.map((span) => span.text).join(""))
    .join("\n");
};

const options = { next: { revalidate: 30 } };

export default async function BlogList() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  console.log(posts.forEach((post) => console.log(post)));

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-headings text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 font-body text-lg/8 text-gray-600">
            The Drip Painting Blog is your go-to source for expert painting
            tips, inspiring project ideas, and a behind-the-scenes look at our
            craft.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt="Drip paint crew reviewing blueprint"
                  src={urlFor(post.image)?.width(550).height(310).url()}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedAt} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 font-headings text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`./blog/${post.slug.current}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 font-body text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm/6">
                    <p className="font-headings font-semibold text-gray-900">
                      <a href={post.author?.name}>
                        <span className="absolute inset-0" />
                        {post.author?.name}
                      </a>
                    </p>
                    <p className="font-body text-gray-600">
                      {post.author?.bio ? parseBio(post.author.bio) : ""}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
