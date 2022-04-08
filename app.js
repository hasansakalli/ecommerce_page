var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var number = document.getElementById("number");
var money = document.getElementById("money");
var count = 1;
var sepet;

function plusF() {
  if (plus) {
    count++;
    number.innerHTML = count;

    money.innerHTML = "$" + count * 125 + ".00";

    console.log(count);
  }
}
function minusF() {
  if (minus && count !== 1) {
    count--;
    number.innerHTML = count;
    money.innerHTML = "$" + count * 125 + ".00";
    console.log(count);
  }
}
function addCart() {
  sepet = document.getElementById("sepet-sayi");
  sepet.innerHTML = count;
  console.log(sepet);
}

bigImage = document.getElementById("bigImage1");

function imgOpen1() {
  document.getElementById("bigImage1").src = "images/image-product-1.jpg";
}
function imgOpen2() {
  document.getElementById("bigImage1").src = "images/image-product-2.jpg";
}
function imgOpen3() {
  document.getElementById("bigImage1").src = "images/image-product-3.jpg";
}
function imgOpen4() {
  document.getElementById("bigImage1").src = "images/image-product-4.jpg";
}
