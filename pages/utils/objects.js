/**
 * Split an Array to many child array with chunk_size items
 * @param Array array
 * @param integer chunk_size  : numer of items
 */
export const splitArray = (array, chunk_size) => {
  let arrayLength = array.length;
  let tempArray = [];

  for (let index = 0; index < arrayLength; index += chunk_size) {
    let newArray = array.slice(index, index + chunk_size);
    tempArray.push(newArray);
  }

  return tempArray;
};


/**
 * Number.prototype.format(n, x)
 *
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
export const formatMoney = (mumber, n, x) => {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return mumber.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
