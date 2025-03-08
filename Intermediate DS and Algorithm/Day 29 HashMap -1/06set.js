// Js set will store the unique key elements

let set1 = new Set(["yamaha"]);

set1.add("honda");
set1.add("suzuki");
set1.add("hero");
set1.add("pulzer");
set1.add("honda");

console.log(set1);
console.log(set1.size);
console.log(set1.has("honda"));
console.log(set1.delete("honda"));
console.log(set1.keys());
