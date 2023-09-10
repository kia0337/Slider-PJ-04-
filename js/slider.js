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
    for (let i = 0; i < slidesToRender.length; i++){
    container.appendChild(slidesToRender[i])
    }
}
};
renderSlides();

const slider = document.querySelector('#slider');


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
    if (active = slides.length + 1){
        active = 0;
    } else {
        active += 1;
    }
};

let makeInactive = (function (){ 
    let el = document.querySelector('.descripton-hidden');
    for( let i = 0; i < slides.length; i++){
    el.classList.remove("descripton-hidden")
    };
}) 
makeInactive();



//меняем бэк
const setBack = (i) => {
    slider.style.backgroundImage = `url(${slides[i].img})`;
};

// меняем контэнт
const changeContent = (i) => {
    document.querySelector('city').textContent = slides[i].city;
    document.querySelector('.area').textContent = slides[i].area;
    document.querySelector('.time').textContent = slides[i].time;
};

// отображение точек
const activeDot = (index) => {
    slides[i].dot.style.opacity = 1;
    slides[i].line.classList.add('brown-hypertext');
}
const notActiveDot = (index) => {
    slides[i].dot.style.opacity = 0.5;
    slides[i].line.classList.remove('brown-hypertext');
};

const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

arrowRight.addEventListener('click', () => {
    makeInactive ();
    setBack();
    notActiveDot();
    incremet();
    changeContent();
    activeDot();
});


arrowLeft.addEventListener('click', () => {
    makeInactive ();
    notActiveDot();
    decrement();
    changeContent();
    setBack();
    activeDot();
});

const pressDot = (i) => {
    notActiveDot(active);
    changeContent(i);
    active = i;
    setBack(active);
    activeDot(active);
};

// function pressOnDot (){
// for (let i = 0; i < slides.length; i++) {
//     slides[i].dot.addEventListener('click', () => {
//         press(i);
//     });
//     slides[i].line.addEventListener('click', () => {
//         press(i);
//     });
// };
// };
// pressOnDot ();

