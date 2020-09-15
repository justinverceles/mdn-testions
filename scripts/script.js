
// show + hide
const answButtons = document.querySelectorAll('main button');
const navButton = document.querySelector('#nav');

navButton.addEventListener('click', e => {
  if (!e.target.hasAttribute('class')){
    e.target.nextElementSibling.setAttribute('style',
      `height: auto;
      border-block-end: lightgray .02em solid;
      box-shadow: 0 5em 4.5em -4.5em lightgray;`
    );
    e.target.nextElementSibling.setAttribute('aria-hidden', 'false');
    e.target.setAttribute('aria-expanded', 'true');
    e.target.className = 'show';
  } else if (e.target.className === 'show'){
    e.target.nextElementSibling.removeAttribute('style');
    e.target.nextElementSibling.setAttribute('aria-hidden', 'true');
    e.target.removeAttribute('class');
    e.target.removeAttribute('aria-expanded');
  }
});

answButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.hasAttribute('class')){
      button.setAttribute('style', 'box-shadow: 0 0 0.2em lightgray inset;');
      button.nextElementSibling.setAttribute('style', 
        `height: auto; 
        padding: 0 1em;
        margin: 1em 0;
        border: lightgray 0.02em solid;
        border-radius: 0.75em 2em;
        box-shadow: 0 0 0.5em lightgray inset;`
      );
      button.nextElementSibling.setAttribute('aria-hidden', 'false');
      button.setAttribute('aria-expanded', 'true');
      button.textContent = 'Hide answer';
      button.className = 'show';
    } else if (button.className === 'show'){
      button.removeAttribute('style');
      button.nextElementSibling.removeAttribute('style');
      button.nextElementSibling.setAttribute('aria-hidden', 'true');
      button.removeAttribute('aria-expanded');
      button.textContent = 'Show answer';
      button.removeAttribute('class');
    }
  });
});


/*  (for contents) 
1. 
  1.1.
  1.2.
2.
  2.1.  

and puts each of those heading numbers before the headings
*/
const contents = document.querySelectorAll('#contents > ol > li');
for (let i = 0; i < contents.length; i++) {
  document.querySelector(`${contents[i].firstElementChild.getAttribute('href')}`).firstElementChild.textContent = 
    `${i+1}. ${document.querySelector(`${contents[i].firstElementChild.getAttribute('href')}`).firstElementChild.textContent}`;
  for (let j = 0; j < contents[i].lastElementChild.children.length; j++) {
    contents[i].lastElementChild.children[j].setAttribute('style', `list-style-type: '${i+1}.${j+1}. '`);
    document.querySelector(contents[i].lastElementChild.children[j].firstElementChild.getAttribute('href')).textContent = 
      `${i+1}.${j+1}. ${document.querySelector(contents[i].lastElementChild.children[j].firstElementChild.getAttribute('href')).textContent}`;
  }
}


