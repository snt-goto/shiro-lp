import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { FixedRadioImg } from 'components/Img';
import { Shop } from 'components/Item';
import { MainTit } from 'components/Tit';
import { MainTxt } from 'components/Txt';

import { LinkInPage } from 'feat';

import { mq } from 'styles/media';

interface Props {}

const MainShop = ({}: Props) => {
  const shopItems = [
    {
      tit: '住所',
      txt: '〒810-0001<br/>福岡県福岡市中央区天神0-0-0'
    },
    {
      tit: '電話番号',
      txt: '0120-000-000'
    },
    {
      tit: '営業時間',
      txt: '11:00-20:30<br/>（定休日：水曜日）'
    },
    {
      tit: 'アクセス',
      txt: '天神駅12a出口から徒歩6分<br/>東京駅8b出口から徒歩12分'
    }
  ];

  LinkInPage('shop');

  return (
    <div css={component}>
      <span id="shop" />
      <MaxWidth>
        <Wrap width="75">
          <MainTit tit="Shop information" />
          <MainTxt txt="Shiroの店舗情報をご紹介します。" />
          <div css={flex}>
            <div css={img}>
              <FixedRadioImg alt="" src="/img/main_shop_information.jpg" />
            </div>
            <div css={list}>
              <ul>
                {shopItems.map((i, n) => {
                  return <Shop key={n} tit={i.tit} txt={i.txt} />;
                })}
              </ul>
            </div>
          </div>
        </Wrap>
      </MaxWidth>
    </div>
  );
};

const component = css`
  padding-bottom: 7.5rem;
  position: relative;

  ${mq.m} {
    padding-bottom: 6.8rem;
  }

  ${mq.xs} {
    padding-bottom: 6.1rem;
  }
`;

const flex = css`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${mq.s} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const img = css`
  height: 20rem;
  position: relative;
  width: var(--two-column-3);

  ${mq.l} {
    width: var(--two-column-2);
  }

  ${mq.m} {
    height: 18rem;
    width: var(--two-column-1);
  }

  ${mq.s} {
    margin-bottom: 1.8rem;
    width: 100%;
  }

  ${mq.xs} {
    height: 16rem;
  }
`;

const list = css`
  padding: 0 2.5rem;
  width: var(--two-column-3);

  & > ul {
    list-style: none;
  }

  ${mq.l} {
    width: var(--two-column-2);

    & > ul {
    }
  }

  ${mq.m} {
    padding: 0 1.5rem;
    width: var(--two-column-1);
  }

  ${mq.s} {
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
`;

export default MainShop;
