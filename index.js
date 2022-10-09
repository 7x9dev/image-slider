const back = document.querySelector("#btnBack");
const next = document.querySelector("#btnNext");

const gallery = [
   "images/1.jpg",
   "images/2.jpg",
   "images/3.jpg",
   "images/4.jpg",
   "images/5.jpg",
];

let i = 0;

next.addEventListener("click", () => {
   i++;
   if (i > gallery.length - 1) {
      i = 0;
   }
   document.querySelector("#image").src = gallery[i];
});

back.addEventListener("click", () => {
   i--;
   if (i < 0) {
      i = gallery.length - 1;
   }
   document.querySelector("#image").src = gallery[i];
});
