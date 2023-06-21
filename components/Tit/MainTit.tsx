import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  tit: string;
}

const MainTit = ({ tit }: Props) => {
  return <h2 css={component}>{tit}</h2>;
};

const component = css`
  color: var(--color-1);
  font-family: var(--poppins);
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  padding: 5rem 0 1.5rem;
  position: relative;
  text-align: center;

  &::after {
    background-color: var(--color-1);
    bottom: 0;
    content: '';
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 2.5rem;
  }

  ${mq.xl} {
    font-size: 2.3rem;
  }

  ${mq.l} {
    font-size: 2.1rem;
  }

  ${mq.m} {
    font-size: 2rem;
    margin-bottom: 1.8rem;
    padding: 4.5rem 0 1.4rem;

    &::after {
      width: 2.3rem;
    }
  }

  ${mq.s} {
    font-size: 1.9rem;
  }

  ${mq.xs} {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
    padding: 4rem 0 1.3rem;

    &::after {
      width: 2.1rem;
    }
  }
`;

export default MainTit;
