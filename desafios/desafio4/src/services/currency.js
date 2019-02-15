import numeral from 'numeral';
// load a locale
numeral.register('locale', 'br-pt', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'bilhões',
    trillion: 'trilhões',
  },
  ordinal: () => 'º',
  currency: {
    symbol: 'R$',
  },
});

export default numeral;
