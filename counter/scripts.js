let c=0;
const t=document.querySelector('#title');
const bd=document.querySelector('#dec');
const br=document.querySelector('#res');
const bi=document.querySelector('#inc');

bi.addEventListener('click',()=>{
    c++;
    t.textContent=c;
})

bd.addEventListener('click',()=>{
    c--;
    t.textContent=c;
})

br.addEventListener('click',()=>{
    c=0;
    t.textContent=c;
})