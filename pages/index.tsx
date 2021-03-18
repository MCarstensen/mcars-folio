import { FC } from 'react';

import Head from 'next/head';
import tw from 'twin.macro';
import Section from '../components/Section'
import Container from '../components/Container'

type IndexPageProps = unknown;

const IndexPage: FC<IndexPageProps> = () => {
  return (
   <>
    <Section>
      <Container tw="leading-relaxed">
        <h1 css={[
          tw`text-5xl font-bold font-display`,
        ]}>
          Matt Carstensen
        </h1>
        <span css={[tw`text-2xl font-light`, tw`font-sans`]}>Birmingham Software Engineer</span>
      </Container>
    </Section>
    <Section tw="bg-ls-light-900">
      
      <div tw="rounded-3xl my-5 max-w-3xl bg-ls-dark mx-auto px-10 py-5">

        <h2 tw="text-4xl font-bold font-display">Folio Site</h2>
        <p tw="text-xl my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis quibusdam cumque ab, molestiae perferendis similique eveniet dignissimos porro laborum, aperiam, doloremque placeat adipisci corrupti!
        </p>
        <p tw="text-xl my-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolor debitis nostrum quibusdam inventore sed illum quidem vero consequuntur nemo exercitationem odio neque voluptas ipsam itaque laudantium dicta, distinctio quia?
        </p>
      </div>
      
    </Section>
   </>
  );
};

export default IndexPage;
