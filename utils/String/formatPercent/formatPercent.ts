const formatPercent = (decNum: number, decimals: number = 1) => {
  return `${Number(100 * decNum).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })}%`;
};

export default formatPercent;
