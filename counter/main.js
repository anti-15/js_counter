const up = document.querySelector('.up');
const down = document.querySelector(".down");
const reset = document.querySelector(".reset");
const load = document.querySelector(".load");

const count = document.querySelector('.count');

let counter = 0;

//カウントアップ関数
function countUp() {
  counter++;
  count.innerHTML = counter;
};

//カウントダウン関数
function countDown() {
  if (counter !== 0) {
    counter--;
    count.innerHTML = counter;  
  }
  
};

//リセット関数
function countReset() {
  counter =0;
  count.innerHTML = counter;
};

//数えるものをセット
function set() {
  let txt = document.querySelector('.txtbox').value;
  document.querySelector('p').innerHTML = txt;
  document.querySelector('.txtbox').value = '';
}

up.addEventListener('click', countUp);
down.addEventListener('click', countDown);
reset.addEventListener("click", countReset);
load.addEventListener("click", set);