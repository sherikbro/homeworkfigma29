// const bd=document.querySelector(".body");
const sd=document.querySelector(".navbar");
const bar=document.querySelector(".burger");
// const darkMode=document.querySelector(".darkMode");
bar.addEventListener('click', ()=>{
    sd.classList.toggle('active');
});
// darkMode.addEventListener('click', ()=>{
//     bd.classList.toggle('active');
// });

const save =()=>{
    sd.classList.toggle('active');
}