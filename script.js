const cilv = ["ivars Bērziņš", "Gunis janovskis", "Jānis Krumins", "Kārlis Maskačka", "Ivans Timotejs"];
const balva = ["Dators ar Ryzen ugunskuru", "SAMSUNG A420", "McLaren BEN15", "Mercedes-Benz AMG", "GOOGLE stonks"];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;//uzvarētāju skaits
let rand = Math.random() * 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = '';

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * 5;
    rand = Math.floor(rand);

    let uzvaretajs = vardi[rand];
    rindas.innerHTML += `
    <tr>
    <td>${i+1}</td>
    </tr>`
}