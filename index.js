'use strict';

const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('p');
const select = document.querySelector('.select');

let caseSelected;
let word;

//Я так и не понял каким образом можно определить род существительного
// Потому проверяю только окончания, а без рода выявить именительный падеж не вышло
// Также не получилось просклонять 3 склонение.

const caseRod = word => {
  let lastSymbol = word.substr(-1);
  let lastTwoSymbol = word.substr(-1 , 2);
  if (lastSymbol == 'а') {
    let finalWord = word.replace(/.$/, 'ы');
    renderWord(finalWord);
  } else if (lastSymbol == 'я') {
    let finalWord = word.replace(/.$/, 'и');
    renderWord(finalWord);
  } else if (lastSymbol == 'ь') {
    let finalWord = word.replace(/.$/, 'я');
    renderWord(finalWord);
  } else if (lastSymbol == 'е') {
    let finalWord = word.replace(/.$/, 'я');
    renderWord(finalWord);
  } else if (lastSymbol == 'о') {
    let finalWord = word.replace(/.$/, 'а');
    renderWord(finalWord);
  } else if (lastTwoSymbol == 'ие') {
    let finalWord = word.replace(/.$/, 'я');
    renderWord(finalWord);
  } else if (lastSymbol == 'й') {
    let finalWord = word.replace(/.$/, 'я');
    renderWord(finalWord);
  } else {
    let finalWord = word + 'а';
    renderWord(finalWord);
  }
};

const caseDat = word => {
  let lastSymbol = word.substr(-1);
  let lastTwoSymbol = word.substr(-1 , 2);
  if (lastSymbol == 'а') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'я') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'ь') {
    let finalWord = word.replace(/.$/, 'ю');
    renderWord(finalWord);
  } else if (lastSymbol == 'е') {
    let finalWord = word.replace(/.$/, 'ю');
    renderWord(finalWord);
  } else if (lastSymbol == 'о') {
    let finalWord = word.replace(/.$/, 'у');
    renderWord(finalWord);
  } else if (lastTwoSymbol == 'ие') {
    let finalWord = word.replace(/.$/, 'ю');
    renderWord(finalWord);
  } else if (lastSymbol == 'й') {
    let finalWord = word.replace(/.$/, 'ю');
    renderWord(finalWord);
  } else {
    let finalWord = word + 'у';
    renderWord(finalWord);
  }
};

const caseVin = word => {
  let lastSymbol = word.substr(-1);
  let lastTwoSymbol = word.substr(-1 , 2);
  if (lastSymbol == 'а') {
    let finalWord = word.replace(/.$/, 'у');
    renderWord(finalWord);
  } else if (lastSymbol == 'я') {
    let finalWord = word.replace(/.$/, 'ю');
    renderWord(finalWord);
  } else if (lastSymbol == 'ь') {
    let finalWord = word.replace(/.$/, 'я');
    renderWord(finalWord);
  } else if (lastSymbol == 'е') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'о') {
    let finalWord = word.replace(/.$/, 'о');
    renderWord(finalWord);
  } else if (lastTwoSymbol == 'ие') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'й') {
    let finalWord = word.replace(/.$/, 'й');
    renderWord(finalWord);
  } else {
    renderWord(word);
  }
};

const caseTvor = word => {
  let lastSymbol = word.substr(-1);
  let lastTwoSymbol = word.substr(-1 , 2);
  if (lastSymbol == 'а') {
    let finalWord = word.replace(/.$/, 'о');
    finalWord = finalWord + 'й';
    renderWord(finalWord);
  } else if (lastSymbol == 'я') {
    let finalWord = word.replace(/.$/, 'е');
    finalWord = finalWord + 'й';
    renderWord(finalWord);
  } else if (lastSymbol == 'ь') {
    let finalWord = word.replace(/.$/, 'я');
    renderWord(finalWord);
  } else if (lastSymbol == 'е') {
    let finalWord = word.replace(/.$/, 'е');
    finalWord = finalWord + 'м';
    renderWord(finalWord);
  } else if (lastSymbol == 'о') {
    let finalWord = word.replace(/.$/, 'о');
    finalWord = finalWord + 'м';
    renderWord(finalWord);
  } else if (lastTwoSymbol == 'ие') {
    let finalWord = word.replace(/.$/, 'е');
    finalWord = finalWord + 'м';
    renderWord(finalWord);
  } else if (lastSymbol == 'й') {
    let finalWord = word.replace(/.$/, 'е');
    finalWord = finalWord + 'м';
    renderWord(finalWord);
  } else {
    let finalWord = word + 'ом';
    renderWord(finalWord);
  }
};

const casePred = word => {
  let lastSymbol = word.substr(-1);
  let lastTwoSymbol = word.substr(-1 , 2);
  if (lastSymbol == 'а') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'я') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'ь') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'е') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'о') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastTwoSymbol == 'ие') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else if (lastSymbol == 'й') {
    let finalWord = word.replace(/.$/, 'е');
    renderWord(finalWord);
  } else {
    let finalWord = word + 'е';
    renderWord(finalWord);
  }
};

button.addEventListener('click', () => {
  word = input.value;
  caseSelected = select.value;
  if (caseSelected === 'rod') {
    caseRod(word);
  }
  if (caseSelected === 'vin') {
    caseVin(word);
  }
  if (caseSelected === 'dat') {
    caseDat(word);
  }
  if (caseSelected === 'tvor') {
    caseTvor(word);
  }
  if (caseSelected === 'pred') {
    casePred(word);
  }
  if (word === '') {
    renderWord('Введите слово');
  }
});

const renderWord = word => {
  p.textContent = word;
};

