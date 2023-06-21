import { css } from '@emotion/react';

interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer css={component}>
      <p>Copyright © Shiro All Rights Reserved.</p>
    </footer>
  );
};

const component = css`
  padding: 0.7rem 0;
  position: relative;

  & > p {
    color: var(--color-2);
    font-family: var(--myriad-pro);
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
`;

export default Footer;
