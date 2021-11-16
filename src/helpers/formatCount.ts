// @ts-nocheck

const getSymbolLength = (price) => {
  let length = String(price).length;
  switch (true) {
    case length > 3 && length <= 6:
      return 'K';
    case length > 6 && length <= 9:
      return 'M';
    case length > 9 && length <= 12:
      return 'T';
  }
};

export const formatCount = (price) => {
  price = String(price);
  if (price.length <= 3) {
    return price;
  }
  let inversedPrice = price.split('').reverse();
  for (let i = 0; i < inversedPrice.length; i++) {
    if (i % 3 === 0 && inversedPrice.length - i <= 3) {
      inversedPrice.splice(i, 0, ',');
      break;
    }
  }
  let priceWithKoma = inversedPrice.reverse();
  for (let i = 0; i < priceWithKoma.length; i++) {
    if (priceWithKoma[i] === ',') {
      if (priceWithKoma[i + 1] !== '0') {
        priceWithKoma.splice(i + 2, 0, getSymbolLength(price));
        priceWithKoma = priceWithKoma.slice(0, i + 3);
      } else {
        priceWithKoma.splice(i, 0, getSymbolLength(price));
        priceWithKoma = priceWithKoma.slice(0, i + 1);
      }
      break;
    }
  }
  return priceWithKoma.join('');
};
