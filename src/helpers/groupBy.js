// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
// groupBy(['one', 'two', 'three'], 'length')
// => {3: ["one", "two"], 5: ["three"]}
export default function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
