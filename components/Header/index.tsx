import { FC } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import tw from 'twin.macro'

type HeaderProps = unknown;

const ATag = tw.a`bg-gray-300 px-5 py-1 text-gray-800 cursor-pointer text-lg flex-grow text-center hover:(bg-blue-300)`;

const BracketStyle = tw.span`text-2xl font-display`;

const Header: FC<HeaderProps> = () => {
  return (
    <header tw="w-full">
      <Container tw="flex justify-between gap-4 py-3">
        <div tw="flex justify-start content-center py-2">
          <div tw="font-display text-2xl text-center h-auto">mCars.dev</div>
        </div>

        <div tw="flex justify-end content-center py-2">
          <div tw="font-display text-2xl text-center uppercase transition duration-200 ease-in-out cursor-pointer p-2 rounded-full">
            <BracketStyle tw="mr-2">
              &#12312;
            </BracketStyle>
            Menu
            <BracketStyle tw="ml-2">
              &#12313;
            </BracketStyle>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
