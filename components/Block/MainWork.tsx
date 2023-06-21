import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { Work } from 'components/Item';
import { MainTit } from 'components/Tit';
import { MainTxt } from 'components/Txt';

import { LinkInPage } from 'feat';

import { mq } from 'styles/media';

interface Props {}

const MainWork = ({}: Props) => {
  const leftWorkItems = [
    {
      height: 26,
      src: '/img/main_work_gift.jpg',
      tit: 'Gift',
      txt: '花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。'
    },
    {
      height: 39,
      src: '/img/main_work_wedding.jpg',
      tit: 'Wedding',
      txt: 'ウエディングドレスに合わせたブーケや式場の雰囲気に合う装花をご提案。お打ち合わせの流れや回数、費用などにつきましてはお問い合わせください。'
    }
  ];

  const rightWorkItems = [
    {
      height: 39,
      src: '/img/main_work_decoration.jpg',
      tit: 'Decoration',
      txt: 'お写真を彩るお花を一輪から販売。一定期間のご契約で定期的にご自宅へ配送させていただくことも可能です。'
    },
    {
      height: 25,
      src: '/img/main_work_for_yourself.jpg',
      tit: 'For yourself',
      txt: 'お部屋の雰囲気やライフスタイルをお聞きしてご自宅用の花束をご提案し、少しでも長く咲かせるコツもお教えします。花束に合った花瓶をご提案することも可能です。'
    }
  ];

  LinkInPage('work');

  return (
    <div css={component}>
      <span id="work" />
      <MaxWidth>
        <Wrap width="75">
          <MainTit tit="Work" />
          <MainTxt txt="オーダーメイドでのブーケ・アレンジメントのデザインのほか、<br/>ウェディングやイベントの装花なども行なっています。<br/>一人一人にあったご提案をさせていただきます。" />
          <div css={list}>
            <ul>
              {leftWorkItems.map((i, n) => {
                return <Work key={n} height={i.height} src={i.src} tit={i.tit} txt={i.txt} />;
              })}
            </ul>
            <ul>
              {rightWorkItems.map((i, n) => {
                return <Work key={n} height={i.height} src={i.src} tit={i.tit} txt={i.txt} />;
              })}
            </ul>
          </div>
        </Wrap>
      </MaxWidth>
    </div>
  );
};

const component = css`
  padding-bottom: 6.2rem;
  position: relative;

  ${mq.m} {
    padding-bottom: 5.6rem;
  }

  ${mq.xs} {
    padding-bottom: 5rem;
  }
`;

const list = css`
  display: flex;
  justify-content: space-between;

  & > ul {
    list-style: none;
    width: var(--two-column-7_5);

    &:nth-child(2) {
      margin-top: 7.5rem;
    }
  }

  ${mq.l} {
    & > ul {
      width: var(--two-column-5);
    }
  }

  ${mq.m} {
    & > ul {
      width: var(--two-column-2_5);

      &:nth-child(2) {
        margin-top: 5rem;
      }
    }
  }

  ${mq.s} {
    flex-direction: column;
    justify-content: flex-start;

    & > ul {
      width: 100%;

      &:nth-child(2) {
        margin-top: 4.5rem;
      }
    }
  }

  ${mq.xs} {
    & > ul {
      &:nth-child(2) {
        margin-top: 4rem;
      }
    }
  }
`;

export default MainWork;
