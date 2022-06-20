import React from "react";
import Head from "next/head";

interface Meta {
  name: string;
  content: string;
}

interface SEOProps {
  description: string;
  author?: string;
  meta: Meta[];
  title: string;
  image?: string;
  favicon?: string;
}

export default function SEO({
  description = "Shil.me is the only link-in-bio platform for displaying and instantly verifying your NFTs. Fully-customizable, now and always.",
  author = "Shil.me",
  meta,
  title = "Shil.me | Display and verify your NFTs",
  image = "https://shil.me/main-image.png",
  favicon,
}: SEOProps) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      {meta.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      {/* <link rel="icon" type="image/x-icon" href={favicon} /> */}
      <meta name="description" content={description} />
      <meta name="og:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
