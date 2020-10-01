import ifUndef from '../../Data/ifUndef/ifUndef';

type Cfg = {
  forceShowCents: boolean;
  hideDollar: boolean;
  forcePlus: boolean;
  hideMinus: boolean;
};

const formatPrice = (n: number, cfg: Partial<Cfg> = {}) => {
  const cfgFilled: Cfg = {
    forceShowCents: ifUndef(cfg.forceShowCents, false),
    hideDollar: ifUndef(cfg.hideDollar, false),
    forcePlus: ifUndef(cfg.forcePlus, false),
    hideMinus: ifUndef(cfg.hideMinus, true),
  };
  const posNeg =
    cfgFilled.forcePlus && n > 0
      ? '+'
      : n < 0 && !cfgFilled.hideMinus
      ? '-'
      : '';
  const usedN = Math.abs(n); //cfgFilled.abs ? Math.abs(n) :
  const S = !cfgFilled.hideDollar ? '$' : '';
  return `${posNeg}${S}${
    cfgFilled.forceShowCents || Math.round(usedN) !== usedN
      ? Number(usedN).toLocaleString(undefined, {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })
      : Number(usedN).toLocaleString(undefined, { maximumFractionDigits: 2 })
  }`;
};

export const makeFormatPrice = (cfg: Partial<Cfg>) => (n: number) =>
  formatPrice(n, cfg);

export default formatPrice;
