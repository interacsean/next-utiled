import { validIconMap } from './index';

export interface IconPublicProps {
  icon: keyof typeof validIconMap;
  className?: string;
  ctnrClassName?: string;
  onClick?: () => void;

  small?: boolean;
  large?: boolean;
  noSize?: boolean;
}

export interface IconProps extends IconPublicProps {}
