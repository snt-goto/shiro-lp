import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {}

const MainVisual = ({}: Props) => {
  return (
    <div css={component} id="main-visual">
      <h1>Shiro</h1>
      <p>White flower shop</p>
    </div>
  );
};

const component = css`
  align-items: center;
  background-image: url(/img/main_visual_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 38.5rem;
  position: relative;

  & > h1 {
    color: var(--white);
    font-family: var(--myriad-pro);
    font-size: 7.5rem;
    font-weight: 400;
  }

  & > p {
    color: var(--white);
    font-family: var(--hiragino-kaku-gothic-pron);
    font-size: 1rem;
    font-weight: 300;
    padding: 0 1.3rem;
    position: relative;

    &::after,
    &::before {
      background-color: var(--white);
      content: '';
      height: 2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 0.8rem;
    }

    &::after {
      left: 0;
    }

    &::before {
      right: 0;
    }
  }

  ${mq.xl} {
    height: 41.5rem;

    & > h1 {
      font-size: 7.8rem;
    }
  }

  ${mq.l} {
    & > h1 {
      font-size: 7.2rem;
    }
  }

  ${mq.m} {
    height: 41.5rem;

    & > h1 {
      font-size: 6.9rem;
    }

    & > p {
      padding: 0 1.2rem;

      &::after,
      &::before {
        height: 1.5px;
      }
    }
  }

  ${mq.s} {
    & > h1 {
      font-size: 6.6rem;
    }
  }

  ${mq.xs} {
    height: 44.5rem;

    & > h1 {
      font-size: 6.3rem;
    }

    & > p {
      padding: 0 1.1rem;

      &::after,
      &::before {
        height: 1px;
      }
    }
  }
`;

export default MainVisual;
