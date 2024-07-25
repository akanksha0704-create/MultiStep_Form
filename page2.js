// /step 2 - all function
// active state addition to cards
let cardArcade = document.getElementById('card-arcade');
// cardArcade.addEventListener('click', function () {
//   cardAdvance.classList.remove('active');
//   cardArcade.classList.add('active');
//   cardPro.classList.remove('active');
// });
let cardAdvance = document.getElementById('card-advanced');
// cardAdvance.addEventListener('click', function () {
//   cardArcade.classList.remove('active');
//   cardAdvance.classList.add('active');
//   cardPro.classList.remove('active');
// });
let cardPro = document.getElementById('card-pro');
// cardPro.addEventListener('click', function () {
//   cardArcade.classList.remove('active');
//   cardAdvance.classList.remove('active');
//   cardPro.classList.add('active');
// });

let cards = document.getElementById('allcards');
let selectedCard = cards.querySelectorAll('.card');
for (let i = 0; i < selectedCard.length; i++) {
  let card = selectedCard[i];
  card.addEventListener('click', function () {
    for (let j = 0; j < selectedCard.length; j++) {
      selectedCard[j].classList.remove('active');
    }
    this.classList.add('active');
    localStorage.setItem('activeCard', [this.id, toggle.checked]);
  });
}

// toggle change
let toggle = document.getElementById('flexSwitchCheckChecked');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');

//newSpan creation with styling
let newSpan1 = document.createElement('span');
let newSpan2 = document.createElement('span');
let newSpan3 = document.createElement('span');
newSpan1.innerHTML = '2 months free';
newSpan1.classList.add('newspan');
newSpan2.innerHTML = '2 months free';
newSpan2.classList.add('newspan');
newSpan3.innerHTML = '2 months free';
newSpan3.classList.add('newspan');

//change in text for change in state
let changeText1 = document.querySelector('.card1Text');
let changeText2 = document.querySelector('.card2Text');
let changeText3 = document.querySelector('.card3Text');

//event listener
toggle.addEventListener('change', function () {
  let toggleState = this.checked;
  localStorage.setItem('activeToggle', toggleState);
  if (toggle.checked == true) {
    document.querySelector('.yearly').classList.add('activeState');
    document.querySelector('.yearly').classList.remove('inactiveState');
    document.querySelector('.monthly').classList.add('inactiveState');
    document.querySelector('.monthly').classList.remove('activeState');
    changeText1.innerHTML = '$90/year';
    changeText2.innerHTML = '$120/year';
    changeText3.innerHTML = '$150/year';
    card1.appendChild(newSpan1);
    card2.appendChild(newSpan2);
    card3.appendChild(newSpan3);
    cardArcade.appendChild(card1);
    cardAdvance.appendChild(card2);
    cardPro.appendChild(card3);
  } else {
    document.querySelector('.yearly').classList.remove('activeState');
    document.querySelector('.yearly').classList.add('inactiveState');
    document.querySelector('.monthly').classList.remove('inactiveState');
    document.querySelector('.monthly').classList.add('activeState');
    changeText1.innerHTML = '$9/mo';
    changeText2.innerHTML = '$12/mo';
    changeText3.innerHTML = '$15/mo';
    card1.removeChild(newSpan1);
    card2.removeChild(newSpan2);
    card3.removeChild(newSpan3);
    cardArcade.appendChild(card1);
    cardAdvance.appendChild(card2);
    cardPro.appendChild(card3);
  }
});
