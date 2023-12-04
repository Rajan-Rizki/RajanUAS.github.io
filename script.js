let operator = confirm("Ingin menghitung luas/Area bangunan berbentuk persegi panjang?");
let num1 = parseFloat(prompt("Berapa Tingginya/Height dari bangunan itu? (Meter, jika cm, maka 0, misal 0.25"));
let num2 = parseFloat(prompt("Berapakah Lebarnya/Width dari bangunan itu? (Meter, jika cm, maka 0, misal 0.25"));

if (operator) {
  document.write(`<h1> Luas/Area: ${num1 * num2} m²</h1>`);
} else {
  document.write('<h1>INVALID</h1>') 
} 

