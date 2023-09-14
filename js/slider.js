const slides = [
    {
    img: '../img/rostov.png',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    dot: document.querySelector('.dot-0'),
    line: document.querySelector('.line-decorate-0'),
    },

    {
    img: '../img/sochi.png',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    dot: document.querySelector('.dot-1'),
    line: document.querySelector('.line-decorate-1'),
    },

    {
    img: '../img/patronic.png',
    city:  'Rostov-on-Don LCD Patronic',
    area: '93 m2',
    time: '3 months',
    dot: document.querySelector('.dot-2'),
    line: document.querySelector('.line-decorate-2'),
    }
];

const slider = document.querySelector('#slider');
let active = 0;

function renderSlides(){
const makeSlide =(city,area,time)=> {
    const slide = document.createElement("div");
    slide.className = "slide descripton-hidden";
    slide.innerHTML = `
                        <div class="description-item">
                            <h3 class="title brown-text description-item-title">City:</h3>
                            <span class="city-text">${city}</span>
                        </div>
                        <div class="description-item">
                            <h3 class="title brown-text description-item-title">apartment area:</h3>
                            <span class="area">${area}</span>
                        </div>
                        <div class="description-item">
                            <h3 class="title brown-text description-item-title">Repair time:</h3>
                            <span class="time">${time}</span>
                        </div>
                        <div class="description-item">
                            <h3 class="title brown-text description-item-title">Repair Cost:</h3>
                            <span>Upon request</span>
                        </div>
                    `
    return slide
            };
const slidesToRender = slides.map(({city,area,time})=>makeSlide(city,area,time));
const container = document.getElementById("slides-container");
if (container != null){
    // container.append(...slidesToRender)
    for (let i = 0; i < slidesToRender.length; i++){
    container.appendChild(slidesToRender[i])
    }
}
};
renderSlides();

function decrement () {
    const newStep = active - 1;
    if( active == 0){
        active = slides.length - 1;
    } else {
        active = newStep;
    }
};

function incremet() {
    const newActive = active + 1;
    if (newActive == slides.length) {
        active = 0;
    } else {
        active = newActive;
    }
};
const makeInactive = function (indexToHide) {
    let slidesContainer = document.getElementById("slides-container");
    slidesContainer.children[indexToHide].classList.add("descripton-hidden");
};

const makeActive = (indexToShow) => {
    let slidesContainer = document.getElementById("slides-container");
    slidesContainer.children[indexToShow].classList.remove("descripton-hidden");
};

//меняем бэк
const setBack = (i) => {
    slider.style.background = `url(${slides[i].img})`;
};


// отображение точек
const activeDot = (index) => {
    slides[index].dot.style.opacity = 1;
    slides[index].line.classList.add("brown-hypertext");
};
const notActiveDot = (index) => {
    slides[index].dot.style.opacity = 0.5;
    slides[index].line.classList.remove("brown-hypertext");
};

const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

arrowRight.addEventListener("click", () => {
    // скрываем предыдущий
    makeInactive(active);
    // убираем активность точки
    notActiveDot(active);
    // меняем активный элемент, то есть  active + 1
    incremet();
    // выставляем новый бэкграунд
    setBack(active);
    // показываем контент
    makeActive(active);
    // добавляем активность точки
    activeDot(active);
});


arrowLeft.addEventListener('click', () => {
    // скрываем предыдущий
    makeInactive (active);
    // убираем активность точки
    notActiveDot(active);
    // меняем активный эл. active -1
    decrement();
    // новый бэк
    setBack(active);
     // показываем контент
    makeActive(active);
    // добавляем активность точки
    activeDot(active);
});

const press = (i) => {
    makeInactive (active);
    notActiveDot(active);
    active = i;
    setBack(active);
    makeActive(active);
    activeDot(active);
};


// IIFE
(function displayFirstSlide() {
    let el = document.getElementsByClassName("descripton-hidden");
    el[0].classList.remove("descripton-hidden");
    slides[0].dot.style.opacity = 1;
})();

for ( let i = 0; i < slides.length; i++){
    let event = document.getElementsByClassName('line-decorate');
    let eventTwo = document.getElementsByClassName('dot')
    event[i].addEventListener('click',() => {
        press(i)});
    eventTwo[i].addEventListener('click',() => {
        press(i)});
    };
