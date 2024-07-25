let tickBox = document.querySelectorAll('.tickBox');
let addOns = document.querySelectorAll('.addOns');

// tickBox.forEach(function(tickBoxes,index){
//  tickBoxes.addEventListener('click',function(){
//   if(tickBoxes.checked==true){
//    addOns[index].classList.add('active')
//   }else{
//       addOns[index].classList.remove('active');
//   }
//  })
// })
let storedAddons = [];

for (let i = 0; i < tickBox.length; i++) {
  let boxes = tickBox[i];
  boxes.addEventListener('click', function () {
    if (boxes.checked == true) {
      addOns[i].classList.add('active');
      storedAddons.push([boxes.id]);
    } else {
      addOns[i].classList.remove('active');
      let indexRemoved = storedAddons.indexOf(boxes.id);
      storedAddons.splice(indexRemoved, 1);
    }
  });
}

let nextBtn = document.getElementById('nextStepBtn');
nextBtn.addEventListener('click', function () {
  localStorage.setItem('addOnCards', storedAddons);
});
console.log(storedAddons);
