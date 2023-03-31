import './style.css';
import render from './modules/render.js';
import { commentSubmit } from './modules/commentSubmit.js';

render();

const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', commentSubmit);
