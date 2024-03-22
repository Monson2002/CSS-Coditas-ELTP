const mainSection = document.querySelector('.main-section');
const articleSection = document.querySelector('.article').innerHTML;

for (let index = 0; index < 128; index++) {
  mainSection.innerHTML += articleSection;
}
console.log("hj");
