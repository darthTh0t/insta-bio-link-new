const mainTransition = document.querySelector('main');
const linkedIn = document.querySelector('.linkedin');
const clubHouse = document.querySelector('.clubhouse');
const instaGram = document.querySelector('.instagram');

setTimeout(() => {
    mainTransition.style.opacity = 1;
    mainTransition.style.filter = 'blur(0px)';
}, 1000);


linkedIn.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/debasmita-mazumder/', '_blank')
})

clubHouse.addEventListener('click', function() {
    window.open('https://www.clubhouse.com/@itsdebasmita_', '_blank')
})

instaGram.addEventListener('click', function() {
    const ul = document.createElement('ul')
    const newInstLink = [
        {
            text:'Self Portrait',
            link:'https://www.instagram.com/itsdebasmita_/'
        },

        {
            text:'Art',
            link:'https://www.instagram.com/debasmita_draws/'
        }
    ];
    for(let i = 0; i < newInstLink.length; i++){
        const li = document.createElement('li');
        li.setAttribute('class', 'new-items');
        li.innerHTML = `<p>${newInstLink[i].text}</p>`;
        li.addEventListener('click', function () {
            window.open(newInstLink[i].link, '_blank')
        }, {once: true});
        ul.appendChild(li);
    }
    ul.setAttribute('class', 'new-list');
    instaGram.appendChild(ul);
}, {once: true})