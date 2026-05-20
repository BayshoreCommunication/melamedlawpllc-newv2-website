import { notFound } from "next/navigation";

import BlogDetailsSection from "components/blogs/BlogDetailsSection";
import PageBanner from "components/shared/PageBanner";
import { BLOG_POSTS } from "data/blog-data";

type BlogDetailsPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogDetailsPageProps) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Details | Melamed Law Firm",
      description: "Melamed Law Firm blog details",
    };
  }

  return {
    title: `${post.title} | Melamed Law Firm`,
    description: post.description,
  };
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title="Blog"
        highlight="Details"
        description={post.description}
        backgroundImage="/images/page-banner/page-banner-bg.png"
        breadcrumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: post.title },
        ]}
      />
      <BlogDetailsSection post={post} />
    </>
  );
}
