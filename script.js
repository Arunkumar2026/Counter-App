var incrementBtn = document.getElementById('incrementBtn');
var decrementBtn = document.getElementById('decrementBtn');
var resetBtn = document.getElementById('resetBtn');
var counter = document.getElementById('counter');
var count = 0;

function updateCounter(){
    counter.textContent = count.toString();
};
incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter()
});
decrementBtn.addEventListener('click', function(){
    count--;
    updateCounter();
});
resetBtn.addEventListener('click', function(){
    count = 0;
    updateCounter();
});