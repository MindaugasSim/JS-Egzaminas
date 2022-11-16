/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// showObjectKeys function
function showObjectKeys(object) {
  return Object.keys(object);
}
const result = showObjectKeys(audi);
console.log("Provided object keys:", result);
