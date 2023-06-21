import { css } from '@emotion/react';
import { useEffect } from 'react';

import { MaxWidth, Wrap } from 'components/Base';
import { MobileMenu } from 'components/Elem';

interface Props {}

const Header = ({}: Props) => {
  useEffect(() => {
    const header: any = document.getElementById('header'),
      mainVisualElem: any = document.getElementById('main-visual');

    let mainVisualHeight = Math.round(mainVisualElem.getBoundingClientRect().height * 100) / 100,
      scrollY = window.pageYOffset;

    window.addEventListener('resize', () => {
      mainVisualHeight = Math.round(mainVisualElem.getBoundingClientRect().height * 100) / 100;
    });

    window.addEventListener('scroll', () => {
      scrollY = window.pageYOffset;
      mainVisualHeight <= scrollY ? header.classList.add('change') : header.classList.remove('change');
    });
  });

  return (
    <header css={component} id="header">
      <MaxWidth>
        <Wrap width="75">
          <div css={flex}>
            <a href="#" id="logo">
              Shiro
            </a>
            <MobileMenu />
          </div>
        </Wrap>
      </MaxWidth>
    </header>
  );
};

const component = css`
  height: var(--header-height);
  position: fixed;
  top: 0;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  width: 100%;
  z-index: 100;

  &::after {
    background-color: var(--color-4);
    bottom: 0;
    content: '';
    height: 1px;
    opacity: 0;
    position: absolute;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 100%;
  }

  &.change {
    background-color: var(--white);
    box-shadow: 0 2px 4px var(--black-transparent-10);

    &::after {
      opacity: 1;
    }

    & #logo {
      color: var(--color-2);
    }

    & #open-btn > span {
      background-color: var(--color-2);
    }
  }
`;

const flex = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;

  & > a {
    color: var(--white);
    display: inline-block;
    font-family: var(--myriad-pro);
    font-size: 2.2rem;
    font-weight: 400;
    text-decoration: none;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;

    &:hover {
      text-decoration: none;
    }
  }
`;

export default Header;
