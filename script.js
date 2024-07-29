var a = 99;
var b = a < 77;
var c = a > 99;

if (b && b) {
console.log("T T")
}

else if (b) {
    console.log("T F");
}

else if (c) {
    console.log("F T");
}
else {
    console.log("F F");
}