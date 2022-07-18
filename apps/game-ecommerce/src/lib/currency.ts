export const asCurrencyString = (value: number, symbol?: string): string  => {
  const currencySymbol: string = symbol ?? "$"
  return currencySymbol + value.toFixed(2)
}

export const percentOff = (sale: number, price: number): number => {
  const percentage: number = (1 - (sale / price)) * 100
  return Math.round(percentage)
}