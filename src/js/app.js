import '../css/main.scss';
import { RandomGenerator } from './random-generator';
import 'jquery';

const outputParagragh = document.querySelector('#outputParagragh');

const outputRandomInt = () => { outputParagragh.textContent = RandomGenerator.randomInteger(); }
const outputRandomRange = () => { outputParagragh.textContent = RandomGenerator.randomRange(1, 500); }

const buttonRndInt = $('#randomInt');

const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);



