import { CompWithChildren } from '../../../../types/util/CompWithChildren';

export interface MainLayoutPublicProps extends CompWithChildren {
  theme?: string;
  hideHero?: boolean;
}

export interface MainLayoutProps extends MainLayoutPublicProps {}
