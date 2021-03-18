import Container from '../Container';
import tw from 'twin.macro'
import { DateTime } from 'luxon';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container tw="">

        <div tw="grid grid-cols-1 md:(grid-cols-3) text-xl text-center">
          <a>LinkedIn</a>
          <a>Github</a>
          <a>codepen</a>
        </div>
        <div tw="text-center align-baseline">
          <span tw="text-sm">&copy; {DateTime.now().year}</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
