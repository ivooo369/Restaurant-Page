import './style.css';
import Icon from './images/tab-icon.png';
import { renderHeaderFooter } from './renderHeaderFooter';
import { renderHomePageContent } from './renderHomePageContent';
import { renderMenuPageContent } from './renderMenuPageContent';
import { handleEventListeners } from './handleEventListeners';

const head = document.querySelector('head');
const tabIcon = document.createElement('link');
tabIcon.rel = 'icon';
tabIcon.href = Icon;
head.appendChild(tabIcon);

renderHeaderFooter();
renderHomePageContent();
renderMenuPageContent();
handleEventListeners();

