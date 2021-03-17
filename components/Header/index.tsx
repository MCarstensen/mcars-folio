import { FC } from 'react';
import tw from 'twin.macro';
import Container from '../Container';
import Logo from '../Logo';

type HeaderProps = unknown;

const Header: FC<HeaderProps> = () => {
  return (
    <header tw="bg-gray-800 text-white w-full border-b border-white">
      <Container tw="grid grid-cols-6">
        <div tw="flex justify-center content-center border-r border-white py-2">
          <Logo height={72} />
          {/* <span tw="text-white font-bold text-xl font-sans">mCars.io</span> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
