/**
 * Created by MR.WASEEM on 3/9/2019.
 */
class Cat {
    constructor(name = 'Kitty', image = 'img/cat.jpg') {
        this.name = name;
        this.image = image;
        this.clicks = 0;
    }

    click() {
        this.clicks++
    }
}

const container = document.querySelector('.cats');

let cats = [];
let cat1 = new Cat();
let cat2 = new Cat('Meshmesh', 'img/cat2.jpg');
cats.push(cat1, cat2);

function initApp() {
    const frag = document.createDocumentFragment();

    for (const [index, cat] of cats.entries()) {

        let el = document.createElement('li');
        el.className = 'col-md-6 cat-instance';
        el.setAttribute('data-cat-id', index);
        el.innerHTML = `<h2>${cat.name}</h2><img class="cute-cat mt-2" src="${cat.image}" alt="${cat.name}"><p>Clicks : <span class="count">${cat.clicks}</span></p>`

        frag.appendChild(el);
    }
    container.appendChild(frag);
}

initApp();

container.addEventListener('click', function(e){
    const target = e.target;
    const catsNodeList = document.querySelectorAll('.cats li');

    if (target.parentNode.classList.contains('cat-instance')) {
        const itemIndex = target.parentNode.getAttribute('data-cat-id');
        const catCount = catsNodeList[itemIndex].querySelector('.count');
        cats[itemIndex].clicks++;
        catCount.innerHTML = cats[itemIndex].clicks;
    }
}, false);
