import { AppProps } from 'next/app';
import '../styles/globals.css';
import '@fontsource/rubik'
import '@fontsource/montserrat'
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
