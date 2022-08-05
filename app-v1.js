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
    let newUnList = document.createElement('ul')
    const newInstLink = ['Self Portrait', 'Art'];
    for(let i = 0; i < newInstLink.length; i++){
        const li = document.createElement('li');
        li.innerHTML = `<p>${newInstLink[i]}</p>`
        newUnList.appendChild(li);
    }
    newUnList.setAttribute('class', 'new-list');
    instaGram.appendChild(newUnList);
}, {once: true})