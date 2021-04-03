type ThemeCfg = {
  transparentHeader?: boolean;
  headerPadding?: string | number;
  headerPaddingH?: string | number;
  headerPaddingV?: string | number;
  navSeparator?: 'none' | 'pipe' | 'bullet';
  navActiveDecoration?: 'bold' | 'underline' | 'altColor';
  navHoverDecoration?: 'sameAsActive' | 'underline' | 'underlineSemiTransparent' | 'thinUnderline';
  bodyPaddingH?: string | number;
  heroImage?: string;
  enableLogin?: boolean;
}

const Theme: ThemeCfg = {
}

export default Theme;
