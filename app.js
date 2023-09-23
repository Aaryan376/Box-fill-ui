const boxes = document.getElementsByClassName('box');
let count = 0;
const arr = [];
for(let i = 0;i<boxes.length;i++){
  boxes[i].addEventListener('click',(e)=>{
    boxes[i].classList.add('green');
    arr.push(e.target.id);
    if(arr.length == 7){
     while(count<=7){
      count++;
      setTimeout(()=>{
        let id = arr.shift();
        const box = document.getElementById(id);
        box.classList.remove('green');
      },count*1000);
    }
  }
  })
}
