export function formatCurrencyInteger(
  amount: number,
  currency: string
): string {
  // TODO add language support

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
