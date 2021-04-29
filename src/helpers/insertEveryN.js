// insertEveryN([1,2,3,4,5,6], 'inserted', 2, 1)
// => [1,'inserted',2,3,'inserted',4,5,'inserted',6]
const insertEveryN = (list, toInsert, n, offset=0, insertLast=false) => {
    let index = offset;
    while (insertLast ? index <= list.length : index < list.length) {
        list.splice(index, 0, toInsert);
        index += (n + 1);
    }
    return list;
};

// Tests
// console.log(insertEveryN([1,2,3,4,5,6], 'inserted', 2, 1));  // => [1,'inserted',2,3,'inserted',4,5,'inserted',6]
// console.log(insertEveryN([1,2,3,4,5,6], 'inserted', 2));  // => ['inserted',1,2,'inserted',3,4,'inserted',5,6]
// console.log(insertEveryN([1,2,3,4,5,6], 'inserted', 2, 0, true));  // => ['inserted',1,2,'inserted',3,4,'inserted',5,6,'inserted']

export default insertEveryN;
