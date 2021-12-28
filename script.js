const navSections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav a');

window.addEventListener('scroll', ()=> {
    let current = '';
    navSections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('class');
        }
    })

    navList.forEach( li => {
        li.classList.remove('current');
        if(li.id === current) {
            li.classList.add('current');
        }
    })
})

