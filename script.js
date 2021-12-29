//dynamic nav highlighting on scroll

const navSections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav a');

window.addEventListener('scroll', ()=> {
    let current = '';
    navSections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navList.forEach( li => {
        li.classList.remove('current');
        if(li.classList.contains(current)) {
            li.classList.add('current');
        }
    })
})

