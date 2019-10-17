import './assets/style.scss';


import Icon from './assets/img/facebook-letter-logo.svg'
const img = new Image()
img.src = Icon
// // element.appendChild(img)
// document.querySelector('body').appendChild(img);

const div = document.createElement('div');
document.querySelector('body').appendChild(div);
document.querySelector('div').appendChild(img);
