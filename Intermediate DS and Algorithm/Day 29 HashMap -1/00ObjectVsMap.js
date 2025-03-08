// object

let obj1 = new Object({ mob: 123 });

obj1.name = "tamil";
obj1.name = "selvan";
obj1.age = 45;
obj1.married = true;

console.log(obj1);
console.log(obj1.hasOwnProperty("age"));
console.log(obj1.hasOwnProperty("address"));

obj1.foreach((x) => console.log(x));

// JS Map holds key-value pairs and preserves original insertion order

let map1 = new Map([
  ["Chocolet", 10],
  ["Bisket", 20],
  ["Magi", 30],
]);

map1.set("raise", 5);
map1.set("sugar", 2);

console.log(map1);
console.log(map1.has("sugar"));
console.log(map1.size);

// Map Methods
// Map.set(key, value)
// map.get(key) - return the key value
// map.has(key) - return ture if the map object contains key else return false
// map.size - return size of the map
// map.delete(key) - delete the specified key element
// map.clear() - clear all map elements

let map2 = new Map();

map2.set("hp", 20000);
map2.set("dell", 35000);
map2.set("mac", 50000);
map2.set("lenovo", 45000);

console.log(map2);
console.log(`size of ${map2.size}`);
map2.delete("hp");
console.log(`After removing the hp`, map2);
console.log(map2.has("mac"));
console.log(map2.get("mac"));
