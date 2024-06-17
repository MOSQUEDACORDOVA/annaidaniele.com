let nav = document.getElementById('navb'),
bodyTag = document.querySelector('body'),
navLinks = document.querySelectorAll('#navb .nav-link'),
btnMenu = document.getElementById('btn-menu'),
btnClose = document.getElementById('btn-close-menu');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        MenuAction(false); 
    });
});

btnMenu.addEventListener('click', () => {
    MenuAction(true);
});

btnClose.addEventListener('click', () => {
    MenuAction(false); 
});

const MenuAction = (bool) => {
    if (bool) {
        bodyTag.classList.add('disable-scroll');
        navb.classList.add('show');
    } else {
        bodyTag.classList.remove('disable-scroll');
        navb.classList.remove('show');
    }
} 

const fecthLang = async () => {
    const url = 'https://ibmwatsonlanguagetranslatordimasv1.p.rapidapi.com/createModel';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '3f87794c46msh84afb2ba6982592p181ddcjsnabc980580913',
            'X-RapidAPI-Host': 'IBMWatsonLanguageTranslatordimasV1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            baseModelId: '<REQUIRED>'
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

const checkScreenWidth = () => {
    var videoMovil = document.getElementById('vid-movil');
    var videoDesk = document.getElementById('vid-desk');

    if (window.innerWidth <= 992) {
        videoMovil.play();
    } else {
        videoDesk.play();
    }
}

window.addEventListener('load', function() {
    checkScreenWidth();
    document.querySelector('body').classList.add('show');
});

let links = document.querySelector('.linksBtn');

links.addEventListener('click', function() {
    window.open('https://glossario.wein.plus/penedes-2', '_blank');
    window.open('https://ecasatua.catalunya.com/experiencia/penedes-vino-con-anima-mediterranea/', '_blank');
});