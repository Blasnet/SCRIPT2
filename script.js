console.log("Hello");
//a*x+b=0
//x=-b/a
let a = prompt("input a");
let b = prompt("input b");
if (isNaN(a) || isNaN(b)) {
  alert("not a number");
} else {
  let x;
  if (a == 0) {
    alert("ERORR");
  } else {
    x = -b / a;
    alert(x);
  }
}
