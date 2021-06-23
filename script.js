const [color1, color2] = document.querySelectorAll('.input');
const [btn1, btn2] = document.querySelectorAll('.colorBtn');
const body = document.querySelector('#gradient');
// console.log(color1, color2);

const syncColorBackgrounds = () => {
    //Syncs the bgs of Btns and Color Inputs
    btn1.style.background = color1.value;
    btn2.style.background = color2.value;
    color1.style.background = color1.value;
    color2.style.background = color2.value;
};

const changeBodyBackground = () => {
    syncColorBackgrounds();
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

color1.addEventListener('input', changeBodyBackground);
color2.addEventListener('input', changeBodyBackground);

btn1.onclick = () => {
    color1.click();
    color1.style.display = 'none';
};

btn2.onclick = () => {
    color2.click();
    color2.style.display = 'none';
};