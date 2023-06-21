import { ReactNode } from 'react';
import { Footer, Header, Ogp } from 'components/Layout';

interface Props {
  children: ReactNode;
  tit?: string;
}

const Layout = ({ children, tit }: Props) => (
  <>
    <Ogp tit={tit} />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
