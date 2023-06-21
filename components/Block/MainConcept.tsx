import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { FixedRadioImg } from 'components/Img';
import { MainTit } from 'components/Tit';
import { MainTxt } from 'components/Txt';

import { LinkInPage } from 'feat';

import { mq } from 'styles/media';

interface Props {}

const MainConcept = ({}: Props) => {
  LinkInPage('concept');

  return (
    <div css={component}>
      <span id="concept" />
      <MaxWidth>
        <Wrap width="75">
          <MainTit tit="Concept" />
          <MainTxt txt=" 私たちShiroは、<br class='mq-s'/>白いお花だけを取り扱うフラワーショップです。<br />色とりどりの花束も素敵だけれど、<br class='mq-s'/>洗練された「白」の美しさを感じてほしい。<br />「白」に対する<br class='mq-xs'/>愛から生まれた静寂な時間が流れる店へ、<br class='mq-s'/>ぜひお越しください。" />
          <div css={img}>
            <FixedRadioImg alt="" src="/img/main_concept.jpg" />
          </div>
        </Wrap>
      </MaxWidth>
    </div>
  );
};

const component = css`
  padding-bottom: 6.3rem;
  position: relative;

  &::after {
    background-color: var(--color-3);
    bottom: 0;
    content: '';
    height: 15rem;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  ${mq.m} {
    padding-bottom: 5.7rem;

    &::after {
      height: 13.5rem;
    }
  }

  ${mq.xs} {
    padding-bottom: 5.1rem;

    &::after {
      height: 12rem;
    }
  }
`;

const img = css`
  height: 25rem;
  position: relative;
  width: 100%;

  ${mq.m} {
    height: 22.5rem;
  }

  ${mq.xs} {
    height: 20rem;
  }
`;

export default MainConcept;
