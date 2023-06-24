import { ReactNode } from 'react';
import { Footer, Hd, Header } from 'components/Layout';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Hd />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
