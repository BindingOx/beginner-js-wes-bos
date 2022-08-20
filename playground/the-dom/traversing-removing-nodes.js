const para = document.querySelector('.mack');

console.log('🪓 => para.children', para.children); // 1: em
console.log('🪓 => para.childNodes', para.childNodes); // 3: text, em, text

//* these are all for elements. will ignore plain text nodes.
console.log('🪓 => para.firstElementChild', para.firstElementChild);
console.log('🪓 => para.lastElementChild', para.lastElementChild);
console.log('🪓 => para.previousElementSibling', para.previousElementSibling);
console.log('🪓 => para.nextElementSibling', para.nextElementSibling);
console.log('🪓 => para.parentElement', para.parentElement);

//* these are all for nodes
// para.childNodes
console.log('🪓 => para.firstChild', para.firstChild); // I am Mack. I
console.log('🪓 => para.lastChild', para.lastChild); //  to watch scambait videos
console.log('🪓 => para.previousSibling', para.previousSibling); // text
console.log('🪓 => para.nextSibling', para.nextSibling); // text
console.log('🪓 => para.parentNode', para.parentNode);

//* ---------------------------- removing elements --------------------------- */

// use .remove() but if you created it yourself, then it will still be there in memory after being removed

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log('🪓 => p', p); // we still have access to it. <p>I will be removed</p>
// document.body.appendChild(p); // and could put it back in if we wanted to
