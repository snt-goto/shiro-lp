import { css } from '@emotion/react';

import { FixedRadioImg } from 'components/Img';

import { mq } from 'styles/media';

interface Props {
  height: number;
  src: string;
  tit: string;
  txt: string;
}

const Work = ({ height, src, tit, txt }: Props) => {
  return (
    <li css={component}>
      <div css={img} className={`height_${height}`}>
        <FixedRadioImg alt="" src={src} />
      </div>
      <h3>{tit}</h3>
      <p>{txt}</p>
    </li>
  );
};

const component = css`
  position: relative;

  &:nth-child(n + 2) {
    margin-top: 5rem;
  }

  & h3 {
    color: var(--color-1);
    font-family: var(--poppins);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8em;
  }

  & p {
    color: var(--color-2);
    font-family: var(--myriad-pro);
    font-size: 1rem;
    font-weight: 400;
  }

  ${mq.m} {
    &:nth-child(n + 2) {
      margin-top: 4.5rem;
    }

    & h3 {
      font-size: 1.4rem;
    }
  }

  ${mq.xs} {
    &:nth-child(n + 2) {
      margin-top: 4rem;
    }

    & h3 {
      font-size: 1.3rem;
    }
  }
`;

const img = css`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;

  &.height_25 {
    height: 25rem;
  }

  &.height_26 {
    height: 26rem;
  }

  &.height_39 {
    height: 39rem;
  }

  ${mq.m} {
    &.height_25 {
      height: 22.5rem;
    }

    &.height_26 {
      height: 23.4rem;
    }

    &.height_39 {
      height: 35.1rem;
    }
  }

  ${mq.s} {
    &.height_26 {
      height: 22.5rem;
    }

    &.height_39 {
      height: 22.5rem;
    }
  }

  ${mq.xs} {
    &.height_25 {
      height: 20rem;
    }

    &.height_26 {
      height: 20rem;
    }

    &.height_39 {
      height: 20rem;
    }
  }
`;

export default Work;
