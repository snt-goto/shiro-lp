import Head from 'next/head';

interface Props {}

const Hd = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Shiro　- white flower shop -</title>
        <meta
          name="description"
          content="私たちShiroは、白いお花だけを取り扱うフラワーショップです。色とりどりの花束も素敵だけれど、洗練された「白」の美しさを感じてほしい。「白」に対する愛から生まれた静寂な時間が流れる店へ、ぜひお越しください。"
        />
        <meta name="robots" content="noindex" />
      </Head>
    </>
  );
};

export default Hd;
