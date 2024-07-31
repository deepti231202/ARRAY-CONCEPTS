

//========================================================================

//                     31/07/2024

// 7) Array joining 
 
function func() {
  let a = [1, 2, 3, 4, 5, ];
  console.log(a.join('|'));
}
func();
        
//===========================================================================================

// 17)Array deduplication

let array = ["pencil", "pen", "eraser",
  "pen", "ruler", "pen"];

function removeDuplicates(array) {
return array.filter((item,
index) => array.indexOf(item) === index);
}
console.log(removeDuplicates(array));

//===============================================================================================

// 22)Array Manipulation with slice

const fruits = ["Sarah", "Sona", "Ram", "Sam", "Doe"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

//================================================================================================

// 11)Array flattening

const array1 = [[11,22],[33,44]];
const newArray = array1.flat();
console.log(newArray);

//==============================================================================================

function arraysplit(){
  let arr="apple,orange,mango,pineapple";
  let array11=arr.split(",");
  console.log(array11);
}
arraysplit();
