export const formatPrice = (price: number, isRental?: boolean): string => {
  const formattedPrice = `$${price.toLocaleString()}`;
  return isRental ? `${formattedPrice} / mes` : formattedPrice;
};
