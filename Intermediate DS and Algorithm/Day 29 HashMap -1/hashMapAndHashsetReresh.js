//

const obj = new Object();

obj["name"] = "Sachin";
obj["age"] = 24;
obj["city"] = "Delhi";

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
