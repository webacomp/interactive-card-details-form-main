const nameEl = document.querySelector('.name');
const numberEl = document.querySelector('.number');
const datumMonthEl = document.getElementById('datum-mm');
const datumYearEl = document.getElementById('datum-yy');
const btnConfirm = document.getElementById('confirm');
const cvvEl = document.getElementById('cvv')

const userName = document.querySelector('.header__row-data p');
const userNumbers = document.querySelector('.header__card-numbers');

const cardDatum = document.querySelector('.header__row-data span');
const cvv = document.getElementById('card_cvv')

const btnContinue = document.getElementById('continue');
const final = document.querySelector('.final');

const month = document.getElementById('month');
const year = document.getElementById('year');
userName.textContent = 'jane Applessed';



nameEl.addEventListener('input', (e) => {
	userName.textContent = e.target.value;
});
numberEl.addEventListener('input', (e) => {
	userNumbers.textContent = e.target.value;
});

datumMonthEl.addEventListener('input', (e) => {
	month.textContent = e.target.value + ' /';
});
datumYearEl.addEventListener('input', (e) => {
	year.textContent = e.target.value;
});

cvvEl.addEventListener('input', e => {
    cvv.innerHTML = e.target.value
})

btnConfirm.addEventListener('click', (_) => {
	if (!final.classList.contains('show')) final.classList.add('show');
});
btnContinue.addEventListener('click', (_) => {
	if (final.classList.contains('show')) final.classList.remove('show');

	deleteDataFromInput()
});


const deleteDataFromInput = function () {
	nameEl.value = ''
	datumMonthEl.value = ''
	datumYearEl.value = ''
	numberEl.value = ''
	cvvEl.value = ''
}