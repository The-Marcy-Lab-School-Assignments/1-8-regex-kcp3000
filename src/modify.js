const swapAllCases = (strSwap) => {
  const swapCase = (char) => (/[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase());
  return strSwap.replace(/[a-zA-Z]/g, swapCase);
};

module.exports = {
  swapAllCases,
};
