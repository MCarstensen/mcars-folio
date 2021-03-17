import Image from 'next/image';

type LogoProps = {
  height: number;
};

const Logo: React.FC<LogoProps> = ({ height }: LogoProps) => (
  <Image
    src="/images/pearl-m.png"
    alt="mCars.io"
    width={Math.ceil(height * 0.8)}
    height={height}
    loading="eager"
    title="mCars.io"
  />
);

Logo.defaultProps = {
  height: 64,
};

export default Logo;
