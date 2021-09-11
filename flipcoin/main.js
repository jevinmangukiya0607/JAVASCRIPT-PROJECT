let coin = document.querySelector(".coin"),
flipBtn = document.querySelector("#flip-button");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", ()=>{
   let i = Math.floor(Math.random() * 2);
   coin.style.animation = "none";
   disabled();
   if (i) {
       setTimeout(function(){
           coin.style.animation = "spin-heads 3.5s forwards";
       },100);
       heads++;
   }
   else{
    setTimeout(function(){
        coin.style.animation = "spin-tails 3.5s forwards";
    },100);
    tails++;
   }
   setTimeout(updateStats, 3500);
});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads : ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails : ${tails}`;
}

function disabled() {
    flipBtn.classList.add("disabled");
    setTimeout(function() {
        flipBtn.classList.remove("disabled");
    },3500);
}