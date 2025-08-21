function numToPriceStr(price) {
  let priceArr = [...price.toString()];
  let length = priceArr.length;

  let priceStr = priceArr.reduce((prev, cur, idx) => {
    if ((length-idx)%3 === 0)
      prev += ",";
    return prev += cur;
  });
  
  return priceStr;
}

function groupingPerPage(items, perPage) {
  const groups = [];

  let idx = 0;
  while (idx < items.length) {
    groups.push(items.slice(idx, idx+perPage));
    idx += perPage;
  }

  return groups;
}

export { numToPriceStr, groupingPerPage };