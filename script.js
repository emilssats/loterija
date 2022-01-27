const cilv = ["ivars Bērziņš", "Gunis janovskis", "Jānis Krumins", "Kārlis Maskačka", "Ivans Timotejs"];
const balva = ["Dators ar Ryzen ugunskuru", "SAMSUNG A420", "McLaren BEN15", "Mercedes-Benz AMG", "GOOGLE stonks"];
const naudaKopa=100000;//kopeja summa
let uzvaretajuSkaits=5;//uzvarētāju skaits
let rand= Math.random()*5;
rand=Math.floor(rand);//noapaļo uz leju, math.floor - noapaļo uz leju
console.log(cilv[rand]);//izvada konsolē

for(let i=0;<uzvaretajuSkaits;i++){
    let rand =Math.random()*5;
    rand = Math.floor(rand);
    
}
console.log(cilv[rand])