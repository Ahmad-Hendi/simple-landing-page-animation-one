alert('tess')

// select the parts that i want to animate
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headLine = document.querySelector('.headline');

// generate New TimeLine to chain in together multiple animation
const tl = new TimelineMax(); 

// hero : is the div that containe my image
// 1 : is the duration of the animation
// {height: '0%'} : define the START position of the animation
// {height: '80%'} : define the END position of the animation
// -=1.2 : when the animation should start, in thsi case it's exactly when the second one start the third one will start too

tl.fromTo(
    hero, 
    1, 
    {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(
    hero,
    1.2,
    {width: '100%'},{width: '80%', ease: Power2.easeInOut}
    )
.fromTo(
    slider,
    1,
    { x: '-100%' }, { x: '-0%', ease: Power2.easeInOut }, "-=1.2"
)
.fromTo(
    logo,
    0.5,
    { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=0.5"
)
.fromTo(
    hamburger,
    0.5,
    { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=0.5"
)