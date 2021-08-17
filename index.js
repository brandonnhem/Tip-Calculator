const billInput = document.getElementById('bill');
let billAmount = 0.0;

billInput.addEventListener('input', function() {
    billAmount = +(billInput.value);
    resetButton.disabled = false;
    getOutput();
},
false);

const peopleInput = document.getElementById('numberOfPeople');
const errorMessage = document.getElementById('error-msg');
let peopleAmount = 0;

peopleInput.addEventListener('input', function() {
    if(Number(peopleInput.value) === 0) {
        errorMessage.style.display = 'block';
        peopleInput.classList.add('bad-input');
    } else {
        errorMessage.style.display = 'none';
        peopleInput.classList.remove('bad-input');
        peopleAmount = Number(peopleInput.value);
        resetButton.disabled = false;
        getOutput();
    }
}, 
false)

const customTipInput = document.getElementById('custom-tip');
let customTipAmount = 0.0;

customTipInput.addEventListener('input', function() {
    tipButtons.forEach(tipButton => {
        tipButton.classList.remove('active');
    });
    if (tipAmount !== 0.0) {
        tipAmount = 0.0;
    }
    customTipAmount = Number(customTipInput.value) / 100;
    console.log(customTipInput.value);
    resetButton.disabled = false;
    getOutput();
},
false);

const customTipInputDesktop = document.getElementById('custom-tip-desktop');
customTipInputDesktop.addEventListener('input', function() {
    tipButtons.forEach(tipButton => {
        tipButton.classList.remove('active');
    });
    if (tipAmount !== 0.0) {
        tipAmount = 0.0;
    }
    customTipAmount = Number(customTipInputDesktop.value) / 100;
    console.log(customTipInputDesktop.value);
    resetButton.disabled = false;
    getOutput();
},
false);

const tipButtons = document.querySelectorAll('button[id^=btn]');
let tipAmount = 0.0;
tipButtons.forEach(tipButton => {
    tipButton.addEventListener('click', event => {
        tipButtons.forEach(tb => {
            tb.classList.remove('active');
        });
        event.target.classList.add('active');
        tipAmount = Number(event.target.value);
        resetButton.disabled = false;
        getOutput();
    });
},
false);

const outputTip = document.getElementById('tip-perperson');
const outputTotal = document.getElementById('total-perperson');

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', event => {
    billInput.value = '';
    billAmount = 0.0;
    peopleInput.value = '';
    peopleAmount = 0.0;
    tipAmount = 0.0;
    customTipInput.value = '';
    customTipAmount = 0.0;
    outputTip.innerText = '$0.00';
    outputTotal.innerText = '$0.00';
    tipButtons.forEach(tb => {
        tb.classList.remove('active');
    });
    resetButton.disabled = true;
},
false);

function getOutput() {
    if (billAmount !== 0.0 && peopleAmount !== 0 && (tipAmount !== 0.0 || customTipAmount !== 0.0)) {
        let tipPerPerson = tipAmount !== 0.0 ? (billAmount * tipAmount) / peopleAmount : (billAmount * customTipAmount) / peopleAmount;
        let totalPerPerson = (billAmount / peopleAmount) + tipPerPerson;
        outputTip.innerText = '$' + Number(tipPerPerson).toFixed(2);
        outputTotal.innerText = '$' + Number(totalPerPerson).toFixed(2);
    }
}