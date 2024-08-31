let map1 = new Map([
  [1, 10],
  [2, 20],
]);

console.log(map1);
console.log(map1.has(1));
console.log(map1.set(5, 50));
console.log(map1.delete(1));
console.log(map1);
console.log(map1.set(1, 11));
console.log(map1.size);
map1.set("name", "tamilselvan");

console.log(map1.has(2));

console.log(map1);
console.log(map1.get("name"));
map1.clear();
console.log(map1);
