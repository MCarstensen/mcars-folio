import { FC, ReactNode } from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import Header from '../Header';
import Container from '../Container';
import Footer from '../Footer';

const Main = Container.withComponent('main');

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div tw="text-white bg-gray-800 font-serif">
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
