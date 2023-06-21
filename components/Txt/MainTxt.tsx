import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  txt: string;
}

const MainTxt = ({ txt }: Props) => {
  return <p css={component} dangerouslySetInnerHTML={{ __html: txt }} />;
};

const component = css`
  color: var(--color-2);
  font-family: var(--myriad-pro);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  position: relative;
  text-align: center;

  & > br[class*='mq'] {
    display: none;
  }

  ${mq.m} {
    margin-bottom: 2.3rem;
  }

  ${mq.s} {
    & > br.mq-s {
      display: block;
    }
  }

  ${mq.xs} {
    margin-bottom: 2.1rem;

    & > br.mq-xs {
      display: block;
    }
  }
`;

export default MainTxt;
