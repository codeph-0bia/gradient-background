const [color1, color2] = document.querySelectorAll('.color');
const body = document.querySelector('#gradient');

const syncColorInputBackground = () => {
    color1.style.background = color1.value;
    color2.style.background = color2.value;
};

const changeBodyBackground = () => {
    syncColorInputBackground();
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

color1.addEventListener('input', changeBodyBackground);
color2.addEventListener('input', changeBodyBackground);