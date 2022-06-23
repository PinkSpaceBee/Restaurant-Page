const footerText = document.createElement('footer');
footerText.appendChild(document.createElement('span')).textContent = `created by `;
const githubLink = footerText.appendChild(document.createElement('a'));
githubLink.setAttribute('href','https://github.com/PinkSpaceBee');
githubLink.innerHTML = 'PinkSpaceBee';

export {
    footerText
}