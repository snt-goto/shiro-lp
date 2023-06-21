import { useEffect } from 'react';

const LinkInPage = (id: string) => {
  useEffect(() => {
    const elem: any = document.getElementById(id),
      headerElem: any = document.getElementById('header');

    const setHeight = () => {
      const headerHeight = Math.round(headerElem.getBoundingClientRect().height * 100) / 100;

      elem.style.cssText = `
      margin-top: calc(0px - ${headerHeight}px);
      padding-top: ${headerHeight}px;
      `;
    };

    setHeight();

    window.addEventListener('resize', () => {
      setHeight();
    });
  }, [id]);
};

export default LinkInPage;
