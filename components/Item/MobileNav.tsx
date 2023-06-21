import { css } from '@emotion/react';

interface Props {
  href: string;
  menu: string;
}

const MobileNav = ({ href, menu }: Props) => {
  return (
    <li css={component}>
      <a href={href}>{menu}</a>
    </li>
  );
};

const component = css`
  border-top: 1px solid var(--color-5);
  position: relative;

  &:last-child {
    border-bottom: 1px solid var(--color-5);
  }

  & > a {
    color: var(--color-2);
    display: block;
    font-family: var(--myriad-pro);
    font-size: 1.1rem;
    font-weight: 400;
    padding: 1.8rem 0;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:hover {
      background-color: var(--white);
      letter-spacing: 0.1em;
      text-decoration: none;
    }
  }
`;

export default MobileNav;
