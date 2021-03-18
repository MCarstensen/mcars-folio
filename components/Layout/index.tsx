import { FC, ReactNode } from 'react';
import tw from 'twin.macro';
import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
