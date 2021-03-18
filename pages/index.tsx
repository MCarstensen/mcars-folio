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
    <Section tw="bg-ls-light-50 text-ls-dark-800">
      <Container>
        <h1 tw="text-gray-800 text-5xl">Folio Site</h1>
      </Container>
    </Section>
   </>
  );
};

export default IndexPage;
