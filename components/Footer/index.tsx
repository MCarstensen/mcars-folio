import Container from '../Container';
import tw from 'twin.macro'
import { DateTime } from 'luxon';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container tw="max-w-3xl my-10 rounded-3xl py-10">

        <div tw="flex justify-evenly text-xl text-center ">
          <a>LinkedIn</a>
          <a>Github</a>
          <a>codepen</a>
        </div>
      </Container>
        <div tw="text-center align-baseline">
          <span tw="text-sm">&copy; {DateTime.now().year}</span>
        </div>
    </footer>
  );
};

export default Footer;
