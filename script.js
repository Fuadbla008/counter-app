let counter = 0;

const displayCounter = document.getElementById('counter');
const increButton = document.getElementById('increse');
const resetButton = document.getElementById('reset');
const decreButton = document.getElementById('decrese');

function updateCounter(){
    displayCounter.textContent = counter;
}


// increse item

increButton.addEventListener('click', function(){
    counter++
    updateCounter()
});

// reset button
resetButton.addEventListener('click', function(){
    counter = 0;
    updateCounter()
});

// decrese button
decreButton.addEventListener('click', function(){
    counter--
    updateCounter()
});
