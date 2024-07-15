// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation to logo on page load
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('header img');
    logo.style.transform = 'scale(1.2)';
    logo.style.opacity = '1';
    setTimeout(() => {
        logo.style.transform = 'scale(1)';
        logo.style.opacity = '1';
    }, 1000);
});

// Add animation to navigation links on hover
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.color = '#8B9467';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link.style.color = '#F7DC6F';
    });
});
``
// Add animation to buttons on hover
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.backgroundColor = '#8B9467';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#34A85A';
    });
});

// Add scroll event listener to window
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 200) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Add event listener to FAQ section
document.querySelector('#faq button').addEventListener('click', () => {
    const faqSection = document.querySelector('#faq');
    faqSection.classList.toggle('active');
});