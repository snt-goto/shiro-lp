import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Props {
  tit?: string;
}

const Ogp = ({ tit }: Props) => {
  const description =
      '私たちShiroは、白いお花だけを取り扱うフラワーショップです。色とりどりの花束も素敵だけれど、洗練された「白」の美しさを感じてほしい。「白」に対する愛から生まれた静寂な時間が流れる店へ、ぜひお越しください。',
    siteName = 'Shiro　- white flower shop -';

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(location.href);
  }, [url]);

  return (
    <>
      <Head>
        <title>
          {tit ? `${tit} |` : ''} {siteName}
        </title>
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="/img/top/main_visual_bg.jpg" property="og:image" />
        <meta content={`${tit ? `${tit} | ` : ''}${siteName}`} property="og:title" />
        <meta content={url === '/' ? 'website' : 'article'} property="og:type" />
        <meta content={url} property="og:url" />
        <link href={url} rel="canonical" />
      </Head>
    </>
  );
};

export default Ogp;
