// Tham số mặc định

// const sum = (a = 0, b = 0) => {
//   //a, b tham số mặc định chỉ hoạt động khi người dùng không truyền giá trị vào , ưu tiên giá trị người dùng nhập
//   return a + b;
// };

/*
const sum = (a , b) => {
  a = a || 0;
  b = b || 0;
  return a + b;
}
console.log(sum(10));
*/
// End tham số mặc định

// Spread Syntax
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];

// console.log(...arr1);
// console.log(...arr2);
// console.log(...arr3);
/*
let infoUser = {
  fullName: "Đoàn Minh Quang",
  email: "quang@test",
};

let infoUpdate = {
  phone: "02094290",
  age: 19,
};

let infoFinal = {
  ...infoUser,
  ...infoUpdate,
};

console.log(infoFinal);
*/
// End Spread Syntax

// Rest parameters
/*
const sum = (...numbers) => {
  const res = numbers.reduce((total, item) => {
    return total + item;
  }, 0);
  return res;
};

console.log(sum(10, 20, 30, 40, 50, 60));
*/
// End Rest parameters

// Destructuring
let infoUser =
  {
    fullName: "Đoàn Minh Quang",
    email: "quang@test",
  } || {};

const { fullName } = infoUser;

console.log(fullName);
// End Destructuring
