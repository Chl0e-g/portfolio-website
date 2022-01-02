//dynamic nav highlighting on scroll

const navSections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav a');

window.addEventListener('scroll', ()=> {
    let current = '';
    navSections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const documentHeight = document.body.scrollHeight;
        const currentScroll = pageYOffset + window.innerHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
        if(pageYOffset <=20) {
            current = 'aboutMe';
        }
        if(currentScroll >= (documentHeight - 150)) {
            current = 'contact';
        }
    })

    navList.forEach( li => {
        li.classList.remove('current');
        if(li.classList.contains(current)) {
            li.classList.add('current');
        }
    })
})
    

//hamburger menu display and collapse

function hamburgerDisplay() {
    navList.forEach( li => {
        if(li.classList.contains('show')) {
            li.classList.remove('show');
            li.classList.add('hide');
            navBar.classList.remove('nav-bar-show');
        } else if (li.classList.contains('hide')) {
            li.classList.remove('hide');
            li.classList.add('show');
            navBar.classList.add('nav-bar-show');
        }
    })
}

//--collapse hamburger menu on click of any nav link

navList.forEach( li => {
    li.addEventListener("click", function() {
        navList.forEach(li => {
            if(li.classList.contains('show')) {
                li.classList.remove('show');
                li.classList.add('hide');
                navBar.classList.remove('nav-bar-show');
            }
        })
    })
})


//nav bar background and stickiness appearing after scroll
const projectsSection = document.getElementById('projects');
const projectsSectionTop = projectsSection.offsetTop;
const navBar = document.querySelector('nav');

window.addEventListener('scroll', ()=> {
    if(pageYOffset >= projectsSectionTop) {
        navBar.classList.add('nav-beneath-header');
    } else {
        navBar.classList.remove('nav-beneath-header');
    }
})