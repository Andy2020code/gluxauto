// Define an array of card class names
var cardClasses = ['.card-04', '.card-05', '.card-06', '.card-07'];

// Loop thru each card class
cardClasses.forEach(function(cardClass){
    var card = document.querySelector(cardClass);

    //CSS for transition smoothness
    card.style.transition = 'bottom 2s ease in out'

    card.addEventListener('mouseover', function(){
        this.style.position = 'relative';
        this.style.bottom = '20px';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.position = '';
        this.style.bottom = '';
    });
});




//-------------------------------script for slider-01--------------------------//

let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    currentIndex = index;

    const transformValue = -index * slideWidth;
    slider.style.transform = `translateX(${transformValue}px)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

//autoslide
setInterval(nextSlide, 3000); // Change slide every 3 seconds

