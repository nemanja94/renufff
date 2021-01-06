const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const about = document.querySelector('body > div > nav > ul > li:nth-child(2) > a');
const product = document.querySelector('body > div > nav > ul > li:nth-child(3) > a');
const contact = document.querySelector('body > div > nav > ul > li:nth-child(4) > a');

// Hamburger menu conf
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});


about.addEventListener('click', () => {
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.carousel').style.display = 'flex';
});

product.addEventListener('click', () => {
    document.querySelector('.carousel').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
});

contact.addEventListener('click', () => {
    document.querySelector('.carousel').style.display = 'none';
    document.querySelector('.contact').style.display = 'block';
});