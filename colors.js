const color=document.getElementById('change=button')//they returns the element with the id attributes with the specied values.
const textColor=document.getElementById('change=text')
const body=document.body;// it helps in moving to the next color.
// const is used just like the variables and the identifer can't be reasigned 
function randomColor(){
    return Math.floor(Math.random()*255);      //hex colors math.floor is used to return the largest integers or equal to a given number.
}

color.addEventListener('click',bgColor)// used to add different colors

function bgColor(){  // used to set the background color
    const color1=randomColor();
    const color2=randomColor();
    const color3=randomColor();

    const rgbString=`rgb(${color1},${color2},${color3})`//these are primary colors 
    body.style.background=rgbString;
    textColor.textContent=rgbString;


}