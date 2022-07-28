//kelvin is always 293
const kelvin = 293;
// celsius is 273 less than kelvin
var celsius = kelvin - 273;
//calculating fahrenheight from celsius
var fahrenheight = celsius * (9/5) + 32;
//rounds fahrenheight down to nearest number
Math.floor(fahrenheight);

console.log(`The temperature is ${fahrenheight} degrees fahrenheight.`);
