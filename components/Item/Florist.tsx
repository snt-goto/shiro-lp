import { css } from '@emotion/react';

import { FixedRadioImg } from 'components/Img';

import { mq } from 'styles/media';

interface Props {
  src: string;
  tit: string;
  txt: string;
}

const Florist = ({ src, tit, txt }: Props) => {
  return (
    <li css={component}>
      <div css={img}>
        <FixedRadioImg alt="" src={src} />
      </div>
      <h3>{tit}</h3>
      <p>{txt}</p>
    </li>
  );
};

const component = css`
  position: relative;
  width: var(--three-column-2);

  &:not(:nth-child(3n)) {
    margin-right: 2rem;
  }

  & > h3 {
    color: var(--color-1);
    font-family: var(--poppins);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8em;
  }

  & > p {
    color: var(--color-2);
    font-family: var(--myriad-pro);
    font-size: 1rem;
    font-weight: 400;
  }

  ${mq.m} {
    width: var(--three-column-1);

    &:not(:nth-child(3n)) {
      margin-right: 1rem;
    }

    & > h3 {
      font-size: 1.4rem;
    }
  }

  ${mq.s} {
    width: 100%;

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }

    &:nth-child(n + 2) {
      margin: 2.7rem 0 0;
    }
  }

  ${mq.xs} {
    &:nth-child(n + 2) {
      margin: 2.4rem 0 0;
    }

    & > h3 {
      font-size: 1.3rem;
    }
  }
`;

const img = css`
  height: 11.2rem;
  margin-bottom: 0.7rem;
  position: relative;
  width: 100%;

  ${mq.m} {
    height: 10.1rem;
  }

  ${mq.s} {
    height: 11.2rem;
  }

  ${mq.xs} {
    height: 10.1rem;
  }
`;

export default Florist;
