// 1
let firstName = "Tetiana";
let lastName = "Babak";
let fullName = firstName + " " + lastName;
console.log(fullName);
// 2
let length = 10;
let width = 3;
let S = length * width;
console.log(S);
// 3
Math.pow(10,6);
console.log(Math.pow(10,6));
// 4
Math.floor(Math.random()*50);
console.log(Math.floor(Math.random()*50));
// 5
let number = 21;
if ( number < 0) {
    console.log("negative value");
} else { 
    console.log("positive value");
}
// 6
let text = "sweet dreams";
if (text.length > 1) {
console.log (text[text.length - 2 ]);
} else {
    console.log("error")
}
// 7
let month = 8;
switch (month) {
    case 1:
        console.log ("Jun");
        break;
    case 2:
        console.log ("Feb");
        break;
    case 3:
        console.log ("Mar");
        break;
    case 4:
        console.log ("Apr");
        break;
    case 5:
        console.log ("May");
        break;
    case 6:
        console.log ("Jun");
        break;
    case 7:
        console.log ("Jul");
        break;
    case 8:
        console.log ("Aug");
        break;
    case 9:
        console.log ("Sep");
         break;
    case 10:
        console.log ("Oct");
        break;
    case 11:
        console.log ("Nov");
        break;
    case 12:
        console.log ("Dec");
        break;
    default: console.log ("month does not exist");
}
// 8
let password = "712tanechka&";
if (password.length > 5) {
    if (password.indexOf('&')===1){
        console.log('This password is strong');
    } else {
        console.log('This password is weak!');
    }
}
// 9
let a = 18;
let b = 1;
if (typeof a === "number" && typeof b === "number") {
  console.log(a + b);
} else {
  console.log("Sum of those items can\’t be counted");
}
// 10
let textOne = "Mandarin";
let textTwo = "Apelsin";
if ( typeof textOne == "string" && typeof textTwo == "string" &&
textOne.length == textTwo.length) {
    console.log("those items are strings and they\’re equal");
} else {
    console.log("items are not compareble");
}