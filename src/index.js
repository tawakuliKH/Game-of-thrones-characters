import './style.css';
import render from './modules/render';
import { commentSubmit } from './modules/commentSubmit';

render();

const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', commentSubmit);
