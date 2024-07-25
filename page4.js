const selectedCard = localStorage.getItem('activeCard').split(',')[0];
console.log(selectedCard);
const toggleState = localStorage.getItem('activeCard').split(',')[1];
let toggleStateBool = JSON.parse(toggleState.toLowerCase());
console.log(typeof toggleStateBool);
let selectedItem = document.getElementById('mainSection');
let itemPrice = document.getElementById('mainPrice');

//storing data for final calculation
let finalStoredPrice = [];

// card selection
function finalSelection() {
  if (selectedCard == 'card-arcade' && toggleStateBool == true) {
    selectedItem.innerHTML = 'Arcade(Yearly)';
    itemPrice.innerHTML = '$90/mo';
    finalStoredPrice.push(90);
  } else if (selectedCard == 'card-arcade' && toggleStateBool == false) {
    selectedItem.innerHTML = 'Arcade(Monthly)';
    itemPrice.innerHTML = '$9/mo';
    finalStoredPrice.push(9);
  } else if (selectedCard == 'card-advanced' && toggleStateBool == true) {
    selectedItem.innerHTML = 'Advanced(Yearly)';
    itemPrice.innerHTML = '$120/mo';
    finalStoredPrice.push(120);
  } else if (selectedCard == 'card-advanced' && toggleStateBool == false) {
    selectedItem.innerHTML = 'Advanced(Monthly)';
    itemPrice.innerHTML = '$12/mo';
    finalStoredPrice.push(12);
  } else if (selectedCard == 'card-pro' && toggleStateBool == true) {
    selectedItem.innerHTML = 'Pro(Yearly)';
    itemPrice.innerHTML = '$150/mo';
    finalStoredPrice.push(150);
  } else if (selectedCard == 'card-pro' && toggleStateBool == false) {
    selectedItem.innerHTML = 'Pro(Monthly)';
    itemPrice.innerHTML = '$15/mo';
    finalStoredPrice.push(15);
  }
}
finalSelection();

// for addOns cards selection

let storedValues = localStorage.getItem('addOnCards').split(',');

let textAdd = document.getElementById('selectionText');
let priceAdd = document.getElementById('selectionPrice');
let textAdd2 = document.getElementById('selectionText2');
let priceAdd2 = document.getElementById('selectionPrice2');
let textAdd3 = document.getElementById('selectionText3');
let priceAdd3 = document.getElementById('selectionPrice3');

function checkAddOns() {
  for (i = 0; i < storedValues.length; i++) {
    if (storedValues[i] == '') {
      textAdd.innerHTML =
        'Please select addOns to enjoy more of our services ! ';
    } else {
      if (storedValues[i] == 'flexCheckDefault1') {
        textAdd.innerHTML = 'Online Services';
        priceAdd.innerHTML = '$1/mo';
        finalStoredPrice.push(1);
      } else if (storedValues[i] == 'flexCheckDefault2') {
        textAdd2.innerHTML = 'Larger Storage';
        priceAdd2.innerHTML = '$2/mo';
        finalStoredPrice.push(2);
      } else {
        textAdd3.innerHTML = 'Customizable Profile';
        priceAdd3.innerHTML = '$2/mo';
        finalStoredPrice.push(2);
      }
    }
  }
}
checkAddOns();

console.log(finalStoredPrice);

// calculation for final summary

let finalPrice = document.getElementById('final');

function calculate() {
  let numbers = 0;
  finalStoredPrice.forEach((num) => (numbers += num));
  finalPrice.innerHTML = `$${numbers}/mo`;
}

calculate();
