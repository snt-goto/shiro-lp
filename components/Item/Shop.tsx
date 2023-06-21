import { css } from '@emotion/react';

interface Props {
  tit: string;
  txt: string;
}

const Shop = ({ tit, txt }: Props) => {
  return (
    <li css={component}>
      <p>{tit}</p>
      <p dangerouslySetInnerHTML={{ __html: txt }} />
    </li>
  );
};

const component = css`
  display: flex;
  position: relative;

  &:nth-child(n + 2) {
    margin-top: 0.7rem;
  }

  & > p {
    color: var(--color-2);
    font-family: var(--myriad-pro);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8em;

    &:nth-child(1) {
      flex-shrink: 0;
      position: relative;
      width: 5rem;

      &::after {
        background-color: var(--color-4);
        bottom: 0;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
      }
    }

    &:nth-child(2) {
      margin-left: 1rem;
    }
  }
`;

export default Shop;
