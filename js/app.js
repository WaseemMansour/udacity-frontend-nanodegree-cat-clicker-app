/**
 * Created by MR.WASEEM on 3/9/2019.
 */

const cat = document.querySelector('.cute-cat');
const totalClicks = document.querySelector('.total-clicks');


let clickCounter = (function () {
    let counter = 0;
    return function() {
        counter++;
        totalClicks.innerHTML = counter;
    };
})();

cat.addEventListener('click', function(e){
    clickCounter();
}, false);
