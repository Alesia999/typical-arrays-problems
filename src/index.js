
exports.min = function min (array) {
  if(array === undefined) return 0;
  if(array.length === 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if(array === undefined) return 0;
  if(array.length === 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(array === undefined) return 0;
  if(array.length === 0) return 0;
  let sum = 0;
  array.forEach(element => sum=sum+element);
  return sum/(array.length);
}
