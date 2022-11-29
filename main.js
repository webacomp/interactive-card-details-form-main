const nameEl = document.querySelector('.name');
const numberEl = document.querySelector('.number');
const datumMonthEl = document.getElementById('datum-mm');
const datumYearEl = document.getElementById('datum-yy');
const cvvEl = document.getElementById('cvv');

const btnConfirm = document.getElementById('confirm');
const btnContinue = document.getElementById('continue');

const cardContainer = document.querySelector('.card__container');

const userName = document.querySelector('.header__row-data p');
const userNumbers = document.querySelector('.header__card-numbers');
const cardDatum = document.querySelector('.header__row-data span');
const cvv = document.getElementById('card_cvv');

const final = document.querySelector('.final');
const month = document.getElementById('month');
const year = document.getElementById('year');

const numbers = /^[0-9]+$/;

function initDataCard() {
	userName.textContent = 'Jane Applessed';
	userNumbers.textContent = '0000 0000 0000 0000';
	month.textContent = '00 /';
	year.textContent = '00';
}
initDataCard();
//Inputs

nameEl.addEventListener('input', (e) => {
	userName.textContent = e.target.value;
});
numberEl.addEventListener('input', (e) => {
	userNumbers.textContent = e.target.value;

	if (!e.target.value.match(numbers)) {
		numberEl.classList.add('wrong-value');
	}
	
	if(e.target.value.match(numbers)) {
		numberEl.classList.remove('wrong-value');
	}
});

datumMonthEl.addEventListener('input', (e) => {
	month.textContent = e.target.value + ' /';
});
datumYearEl.addEventListener('input', (e) => {
	year.textContent = e.target.value;
});

cvvEl.addEventListener('input', (e) => {
	cvv.textContent = e.target.value;
});

//Button Events
btnConfirm.addEventListener('click', (_) => {
	if (!final.classList.contains('show')) final.classList.add('show');

	cardContainer.style.display = 'none';
});
btnContinue.addEventListener('click', (_) => {
	if (final.classList.contains('show')) final.classList.remove('show');

	cardContainer.style.display = 'block';

	deleteDataFromInput();

	putOutData();
});

//Delete text from input
const deleteDataFromInput = function () {
	nameEl.value = '';
	datumMonthEl.value = '';
	datumYearEl.value = '';
	numberEl.value = '';
	cvvEl.value = '';
};

//Display init data
const putOutData = function () {
	userName.textContent = 'Jane Applessed';
	userNumbers.textContent = '0000 0000 0000 0000';
	month.textContent = '00 /';
	year.textContent = '00';
};
