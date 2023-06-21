import { css } from '@emotion/react';

import { ContactBtn } from 'components/Btn';
import { MainTit } from 'components/Tit';
import { MainTxt } from 'components/Txt';

import { LinkInPage } from 'feat';

import { mq } from 'styles/media';

interface Props {}

const MainContact = ({}: Props) => {
  LinkInPage('contact');

  return (
    <div css={component}>
      <span id="contact" />
      <div css={cont}>
        <MainTit tit="Contact us" />
        <MainTxt txt="イベントや結婚式でご利用する装花のご相談や、<br/>フラワーアレンジメントのご予約などは<br class='mq-s' />こちらからお問い合わせください。" />
        <ContactBtn />
      </div>
    </div>
  );
};

const component = css`
  background-image: url(/img/main_contact_us_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 6.2rem;
  position: relative;

  &::after {
    background-color: var(--white-transparent-60);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  ${mq.m} {
    padding-bottom: 5.6rem;
  }

  ${mq.xs} {
    padding-bottom: 5rem;
  }
`;

const cont = css`
  position: relative;
  z-index: 1;
`;

export default MainContact;
