import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { Florist } from 'components/Item';
import { MainTit } from 'components/Tit';
import { MainTxt } from 'components/Txt';

import { LinkInPage } from 'feat';

import { mq } from 'styles/media';

interface Props {}

const MainFlorist = ({}: Props) => {
  const floristItems = [
    {
      src: '/img/main_florist_shiyu.jpg',
      tit: 'Shiyu',
      txt: 'お花茶屋大学フラワーアレンジメント科を卒業後、さまざまな白い花を探すために世界を一周し、Shiroの創業者となる。'
    },
    {
      src: '/img/main_florist_mao.jpg',
      tit: 'Mao',
      txt: '花の魅力に惹かれ、空間デザインの世界からフローリストの道を歩む。主に結婚式やイベントで使用するお花のディレクション担当。'
    },
    {
      src: '/img/main_florist_omichan.jpg',
      tit: 'Omichan',
      txt: 'フローリスト兼ガーデナーという特殊な経歴をもつ。豊富な知識と技術でお客様のオーダーを叶える。'
    }
  ];

  LinkInPage('florist');

  return (
    <div css={component}>
      <span id="florist" />
      <MaxWidth>
        <Wrap width="75">
          <MainTit tit="Florist" />
          <MainTxt txt="Shiro専属のフローリストたちをご紹介。<br/>得意の分野であなたのオーダーを最大限に叶えます。" />
          <ul css={ulCss}>
            {floristItems.map((i, n) => {
              return <Florist key={n} src={i.src} tit={i.tit} txt={i.txt} />;
            })}
          </ul>
        </Wrap>
      </MaxWidth>
    </div>
  );
};

const component = css`
  padding-bottom: 2.5rem;
  position: relative;

  &::after {
    background-color: var(--color-3);
    top: 0;
    content: '';
    height: 23.3rem;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  ${mq.m} {
    padding-bottom: 2.3rem;

    &::after {
      height: 21rem;
    }
  }

  ${mq.xs} {
    padding-bottom: 2.1rem;
  }
`;

const ulCss = css`
  display: flex;
  list-style: none;

  ${mq.s} {
    flex-direction: column;
  }
`;

export default MainFlorist;
