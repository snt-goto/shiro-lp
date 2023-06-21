import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {}

const ContactBtn = ({}: Props) => {
  return (
    <a css={component} href="#">
      <img alt="" src="/img/email.svg" />
      <p>お問い合わせ</p>
    </a>
  );
};

const component = css`
  align-items: center;
  background-color: var(--white);
  border: 1px solid var(--color-4);
  display: flex;
  height: 5rem;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  width: 22.5rem;

  &:hover {
    background-color: var(--color-3);
    text-decoration: none;
  }

  & > img {
    display: block;
    height: auto;
    margin-right: 1.5rem;
    width: 1.8rem;
  }

  & > p {
    color: var(--color-2);
    font-family: var(--myriad-pro);
    font-size: 1.2rem;
    font-weight: 400;
  }

  ${mq.m} {
    height: 4.5rem;
    width: 20.3rem;

    & > img {
      margin-right: 1.4rem;
      width: 1.7rem;
    }
  }

  ${mq.xs} {
    height: 4rem;
    width: 18.1rem;

    & > img {
      margin-right: 1.3rem;
      width: 1.6rem;
    }
  }
`;

export default ContactBtn;
