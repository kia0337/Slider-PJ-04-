const slides = [
    {
    img: '../img/rostov.png',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    dot: document.querySelector('.dot-1'),
    line: document.querySelector('.line-decorate-1'),
    },

    {
    img: '../img/sochi.png',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    dot: document.querySelector('.dot-2'),
    line: document.querySelector('.line-decorate-2'),
    },

    {
    img: '../img/patronic.png',
    city:  'Rostov-on-Don LCD Patronic',
    area: '93 m2',
    time: '3 months',
    dot: document.querySelector('.dot-3'),
    line: document.querySelector('.line-decorate-3'),
    }
];

function renderSlides(){
const makeSlide =(city,area,time)=> {
    const slide = document.createElement("div");
    slide.className = "descripton-hidden";
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
    for (let i = 0; i <= slidesToRender.length; i++){
    container.appendChild(slidesToRender[i])
    }
}
};
renderSlides();

const slider = document.querySelector('.slider');

// меняем индекс
let active = 0;

function decrement (slides) {
    if(slides == 0){
        active = slides.lenght - 1;
    } else {
        active -= 1;
    }
};
function incremet (slides) {
    if (active = slides.length-1){
        active = 0;
    } else {
        active += 1;
    }
};

//меняем бэк
const setBack = (index) => {
    slider.style.backgroundImage = `url(${slides[index].img})`;
};

// меняем контэнт
const changeContent = (index) => {
    document.querySelector('.city').textContent = slides[index].city;
    document.querySelector('.area').textContent = slides[index].area;
    document.querySelector('.time').textContent = slides[index].time;
};

// отображение точек
const activeDot = (index) => {
    slides[index].dot.style.opacity = 1;
    slides[index].line.classList.add('brown-hypertext');
}
const notActiveDot = (index) => {
    slides[index].dot.style.opacity = 0.1;
    slides[index].line.classList.remove('brown-hypertext');
};

const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');


arrowLeft.addEventListener('click', () => {
    makeInactive(active);
    decrement(active);
    changeContent(active);
    setBack(active);
    activeDot(active);
});

arrowRight.addEventListener('click', () => {
    makeInactive(active);
    incremet(active);
    changeContent(active);
    setBack(active);
    activeDot(active);
});

