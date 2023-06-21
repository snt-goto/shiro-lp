import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { MobileNav } from 'components/Item';

interface Props {}

const MobileMenu = ({}: Props) => {
  const mobileNavItems = [
    {
      href: '#concept',
      menu: 'Concept'
    },
    {
      href: '#work',
      menu: 'Work'
    },
    {
      href: '#florist',
      menu: 'Florist'
    },
    {
      href: '#shop',
      menu: 'Shop information'
    },
    {
      href: '#contact',
      menu: 'Contact us'
    }
  ];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openBtnElem: any = document.getElementById('open-btn');
    const navListElem: any = document.getElementById('nav-list');

    if (open) {
      openBtnElem.classList.add('open');
      navListElem.classList.add('open');
    } else {
      openBtnElem.classList.remove('open');
      navListElem.classList.remove('open');
    }

    window.onresize = () => {
      const windowWidth = document.documentElement.scrollWidth;
      if (windowWidth > 1024) {
        setOpen(false);
      }
    };
  });

  return (
    <div css={component}>
      <div
        css={openBtn}
        id="open-btn"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span />
        <span />
        <span />
      </div>
      <ul
        css={ulCss}
        id="nav-list"
        onClick={() => {
          setOpen(false);
        }}
      >
        {mobileNavItems.map((i, n) => {
          return <MobileNav href={i.href} key={n} menu={i.menu} />;
        })}
      </ul>
    </div>
  );
};

const component = css`
  position: relative;
`;

const openBtn = css`
  cursor: pointer;
  height: calc(2rem * 0.6);
  position: relative;
  width: 2rem;
  z-index: 999;

  &.open {
    & > span {
      &:nth-child(1) {
        top: 50%;
        transform: rotate(45deg) translateY(-50%);
        width: 100%;
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translateY(50%);
        bottom: 50%;
        width: 100%;
      }
    }
  }

  & > span {
    background-color: var(--white);
    display: block;
    height: 1px;
    margin: 0 auto;
    position: absolute;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 100%;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(3) {
      bottom: 0;
    }
  }
`;

const ulCss = css`
  background-color: var(--white-transparent-90);
  bottom: 0;
  left: 0;
  list-style: none;
  max-height: 0;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: var(--header-height);
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  z-index: 998;

  &.open {
    max-height: 100vh;
    pointer-events: auto;
  }
`;

export default MobileMenu;
