import type { GetStaticProps } from "next";
import Head from "next/head";

import PostList from "~/components/PostList";
import Subtitle from "~/components/Subtitle";
import DefaultLayout from "~/containers/layouts/Default";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts";

export default function Home({ allPostsData }: { allPostsData: AllPosts }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Chase Adams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <p style={{ margin: "1rem 0" }}>
            I enable building strong, resilient teams by creating human-centric
            software and self-management frameworks.
          </p>
        </section>
        <section style={{ padding: "1rem 0" }}>
          <Subtitle>Latest Writing</Subtitle>
          <PostList posts={allPostsData} />
        </section>
      </main>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData({ limit: 5 });

  return {
    props: {
      allPostsData,
    },
  };
};
