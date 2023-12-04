let operator = confirm("Ingin menghitung area dari sesuatu?");
let num1 = parseFloat(prompt("Berapa Tingginya? (Meter, jika cm, maka 0, misal 0.25"));
let num2 = parseFloat(prompt("Berapakah Lebarnya? (Meter, jika cm, maka 0, misal 0.25"));

if (operator === true) {
  document.write(`<h1>Result: ${num1 * num2}</h1>`);
}