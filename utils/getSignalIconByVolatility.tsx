const getSignalIconByVolatility = (volatility: number): string => {
  const basePath = '/icons/'

  if (volatility < 4) {
    return `${basePath}low-signal.svg`
  }
  if (volatility < 4.5) {
    return `${basePath}mid-signal.svg`
  }

  return `${basePath}high-signal.svg`
}

export default getSignalIconByVolatility
