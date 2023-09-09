let no_array = [];
for (let i = 0; i < 100; i++) {
  let angka = Math.floor(Math.random() * 50) + 1;

  no_array.push(angka);
}

console.log("array dengan 100 value random 1-50: ");
console.log(no_array);

let genap_array = [];
let ganjil_array = [];

for (let i = 0; i < no_array.length; i++) {
  if (i % 2 === 0) {
    genap_array.push(no_array[i]);
  } else {
    ganjil_array.push(no_array[i]);
  }
}

console.log("array untuk index genap: ");
console.log(genap_array);

console.log("nilai minimum pada index genap: " + funcMin(genap_array));
console.log("nilai maksimum pada index genap: " + funcMax(genap_array));
console.log("total penjumlahan array index genap: "+funcSum(genap_array));
console.log("Rata-rata untuk array index genap: "+funcAvg(genap_array));

console.log("array untuk index ganjil: ");
console.log(ganjil_array);

console.log("nilai minimum pada index ganjil: " + funcMin(ganjil_array));
console.log("nilai maksimum pada index ganjil: " + funcMax(ganjil_array));
console.log("total penjumlahan array index ganjil: "+funcSum(ganjil_array));
console.log("Rata-rata untuk array index ganjil: "+funcAvg(ganjil_array));

console.log("===============================================================");
console.log("P E R B A N D I N G A N : ")
if (funcMin(genap_array) < funcMin(ganjil_array)) {
  console.log("nilai minimal dari array genap lebih kecil dari array ganjil")  
}else if (funcMin(genap_array) === funcMin(ganjil_array)) {
  console.log("nilai min array genap sama dengan nilai min array ganjil")  
}else{
  console.log("nilai min array genap lebih besar dari nilai min array ganjil")  
}
console.log(" ")
if (funcMax(genap_array) < funcMax(ganjil_array)) {
  console.log("nilai MAKSIMUM dari array genap lebih kecil dari array ganjil")  
}else if (funcMax(genap_array) === funcMax(ganjil_array)) {
  console.log("nilai MAKSIMUM array genap sama dengan nilai min array ganjil")  
}else{
  console.log("nilai MAKSIMUM array genap lebih besar dari nilai min array ganjil")  
}
console.log("")
if (funcSum(genap_array) < funcSum(ganjil_array)) {
  console.log("nilai total dari array genap lebih kecil dari array ganjil")  
}else if (funcSum(genap_array) === funcSum(ganjil_array)) {
  console.log("nilai total array genap sama dengan nilai min array ganjil")  
}else{
  console.log("nilai total array genap lebih besar dari nilai min array ganjil")  
}
console.log("")
if (funcAvg(genap_array) < funcAvg(ganjil_array)) {
  console.log("nilai rata-rata dari array genap lebih kecil dari array ganjil")  
}else if (funcAvg(genap_array) === funcAvg(ganjil_array)) {
  console.log("rata-rata array genap sama dengan nilai rata-rata array ganjil")  
}else{
  console.log("nilai rata-rata array genap lebih besar dari nilai rata-rata array ganjil")  
}

function funcMin(x) {
  for (let i = 0; i <x.length; i++) {
    if (x[i] < x[0]) {
      x[0] = x[i];
    }
  }
  return x[0];
}

function funcMax(x) {
  for (let i = 0; i <x.length; i++) {
    if (x[i] > x[0]) {
      x[0] = x[i];
    }
  }
  return x[0];
}

function funcSum(x) {
  let total=0
  for (let i = 0; i < x.length; i++) {
    total+=x[i]
  }
  return total;
}
function funcAvg(x) {
  let total=0
  for (let i = 0; i < x.length; i++) {
    total+=x[i]
  }
  total/=x.length;
  return total;
}
