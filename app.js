  
// name


const newname = document.getElementById('name-input');
const button1 = document.getElementById('name-button');
const oldname = document.getElementById('current-name');
const changecount = document.getElementById('change');

console.log();
console.log();
console.log();

button1.addEventListener('click', () => {
    oldname.textContent = newname.value;
    newname.value = "";
 }
 )

// background color

const tagcolor = document.getElementById('nametag');
const buttonkhaki = document.getElementById('khaki-button');
const buttonteal = document.getElementById('teal-button');

buttonkhaki.addEventListener('click', () => {
    tagcolor.style.backgroundColor = "khaki";
    tagcolor.style.color = "black";
 })

 buttonteal.addEventListener('click', () => {
    tagcolor.style.backgroundColor = "teal";
    tagcolor.style.color = "white";
 })

// font style

const fontfam = document.getElementById('full-tag')
const fontcour = document.getElementById('courier-new')
const fontroman = document.getElementById('new-roman')
const fontarial = document.getElementById('arial-f')

fontcour.addEventListener('click', () => {
    fontfam.style.fontFamily = "Courier New"
})


fontroman.addEventListener('click', () => {
    fontfam.style.fontFamily = "Times New Roman"
})


fontarial.addEventListener('click', () => {
    fontfam.style.fontFamily = "Arial"
})

