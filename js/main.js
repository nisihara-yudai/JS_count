const add = 6 + 2;
console.log(add); //足し算(6 + 2)の結果を表している

const sub = 5 - 2;
console.log(sub); //引き算(5 - 2)の結果を表している

const kake = 5 * 7;
console.log(kake); //掛け算(5 × 7)の結果を表している

const wari = 15 / 3;
console.log(wari); //割り算(15 ÷ 3)の結果を表している

const per = 104 % 10;
console.log(per); //割り算の余り(104 ÷ 10)の結果を表している

let inc = 10;
inc++;
console.log(inc); //数値を1ずつ増加させる操作

let dec = 100;
dec--;
console.log(dec); //数値を1ずつ減少させる操作

let a = 10;
let b = 9;

console.log(a <= b); //bがa以上ならば、true
console.log(a == b); //aがbと同じならば、true
console.log(a >= b); //aがb以上ならば、true
console.log(a < b); //bがaより大きいならば、true
console.log(a > b); //aがbより大きいならば、true

const aa = 50;
const bb = -10;

console.log(aa > 10 || bb > 0);// aaが10より大きいまたは、bbが0より大きいならば、true
console.log(aa > 10 && bb > 0); // aaが10より大きく、bbが0より大きいならば、true

const abc = 10;
console.log(abc === '10'); //abc(数字の10)と、文字列の10は等しいか判断される

console.log(abc === 10); //abc(数字の10)と、数字の10は等しいか判断される

console.log(abc !== '10'); //abc(数字の10)と、文字列の10は等しくないか判断される

console.log(abc !== 10); //abc(数字の10)と、数字の10は等しくないか判断される
