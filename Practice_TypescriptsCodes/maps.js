// let map=new Map()
var array = [];
var array1 = [];
var array2 = [];
array[1] = new Map();
array[2] = new Map();
// array[emp]=
var name1 = "vamshi";
//  array[0].set("name","vamshi");
array[1].set("age", 23);
array[1].set("name", name1);
array[2].set("name", "krishna");
array[2].set("age", 28);
var abc = new Set();
abc["sd"] = array[1];
abc["vk"] = array[2];
//  console.log(abc["vk"]);
//  console.log(abc["sd"]);
var abcd = new Set();
var accountnumber;
accountnumber = "svv".concat(1234);
abcd[accountnumber] = new Map();
abcd["svv12345"] = new Map();
abcd["svv12345"].set("name", "hello");
abcd["svv12345"].set("age", 39);
abcd[accountnumber].set("name", "ravi");
abcd[accountnumber].set("age", 30);
console.log(abcd[accountnumber]);
console.log(abcd);
var a = 2;
var b = parseInt(require('readline-sync').question("enter a numer"));
a += b;
console.log(a);
var Email = require("readline-sync").question("Enter Email");
var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
if (regexp.test(Email)) {
    console.log("true");
}
else {
    console.log("false");
}
//  var acc="vamshi"
// for(var j=0;j<10;j++){
//   console.log()
// }
// console.log(array[1]);
// for(var i=0;i<20;i++){
//      array1[i]=new Map();
// }
// // map[1].set("name","vamshi");
// // map[1].set("age",24);
// // map[2].set("name","krishna");
// // map[2].set("age",23);
// // console.log(map[1]);
// // console.log(map[2]);
// var account="vams";
// console.log(account[1]);
// // console.log(map.get('age'));
// // var array2:any[]=[];
// // array2[0]=map;
// // array2[1]=map;
// // const array1:Record<string, string>[]=[
// //     {"name":"vamshi"},
// //     {"age":"23"}
// // ]
// // console.log(array1);
