import { CompWithChildren } from '../../../../types/util/CompWithChildren';

export interface CardPublicProps extends CompWithChildren {
  className?: string | (string | undefined | false)[];
  'no-pad'?: boolean;
  'no-radius'?: boolean;
  'high-contrast'?: boolean;
  inset?: boolean;
  level2?: boolean;
}

export interface CardProps extends CardPublicProps {}
