/**
 * Created by MR.WASEEM on 3/9/2019.
 */
(function(){
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

    const model = {
        cats: [],
        // populate cats by instantiating them from Cats Class and push to Cats array
        init: function() {
            const cat1 = new Cat();
            const cat2 = new Cat('Meshmesh', 'img/cat2.jpg');
            const cat3 = new Cat('Anoush', 'img/cat3.jpg');
            const cat4 = new Cat('Bosbos', 'img/cat4.jpg');
            const cat5 = new Cat('Nancy', 'img/cat5.jpg');
            this.cats.push(cat1, cat2, cat3, cat4, cat5);
        },
        getAllCats: function() {
            return this.cats;
        },
        selectCat: function(i) {
            return this.getAllCats()[i];
        }
    };

    const octopus = {
        init: function() {
            model.init();
            catListView.init();
            catPreviewView.init();
        },
        getAllCats: function() {
            return model.getAllCats();
        },
        selectCat: function(i) {
            return model.selectCat(i);
        }
    };

    const catListView = {
        catsList: document.querySelector('.cats'),
        init: function() {
            this.catsList.addEventListener('click', function(e){
                const target = e.target;
                if (target.parentNode.classList.contains('cat-instance')) {
                    const itemIndex = target.parentNode.getAttribute('data-cat-id');

                    catPreviewView.render(itemIndex);
                }

            }, false);
            catListView.render();
        },
        render: function() {
            const frag = document.createDocumentFragment();
            const cats = octopus.getAllCats();

            for (const [index, cat] of cats.entries()) {
                const el = document.createElement('li');
                el.className = 'cat-instance';
                el.setAttribute('data-cat-id', index);
                el.innerHTML = `<a href="javascript:void(0)">${cat.name}</a>`;

                frag.appendChild(el);
            }
            this.catsList.appendChild(frag);
        }
    };

    const catPreviewView = {
        preview: document.querySelector('.cat-preview'),
        init: function() {
            this.preview.addEventListener('click', function(e){
                const target = e.target;
                if (target.classList.contains('cute-cat')) {
                    const itemIndex = target.parentNode.getAttribute('data-cat-id');
                    const catCount = target.parentNode.querySelector('.count');
                    const cats = octopus.getAllCats();

                    cats[itemIndex].clicks++;
                    catCount.innerHTML = cats[itemIndex].clicks;
                }
            });

            this.preview.setAttribute('data-cat-id', 0);
            catPreviewView.render(0);



        },
        render: function(i) {
            const catName = document.querySelector('.cat-name');
            const catImage = document.querySelector('.cute-cat');
            const catClicks = document.querySelector('.count');

            const selectedCat = octopus.selectCat(i);
            this.preview.setAttribute('data-cat-id', i);

            catName.innerHTML = selectedCat.name;
            catImage.setAttribute('src', selectedCat.image);
            catImage.setAttribute('alt', selectedCat.name);
            catClicks.innerHTML = selectedCat.clicks;
        }
    };

    octopus.init();

})();
