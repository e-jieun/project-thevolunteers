import {
  hun
} from "./module/variable.js";
import colorObj from "./module/color.js";
import {
  display,
  size
} from "./module/css-function.js";
import appendName from "./module/appendname.js";

document.body.setAttribute('style', `margin: 0; padding: 0; box-sizing: border-box; color: ${colorObj.colorFf};`);

const conTwo = document.getElementById('con-2');
console.log(conTwo);
display(conTwo, 'grid');
conTwo.setAttribute('style', `width: ${hun}vw; height: ${hun*2+60}vh; background: ${colorObj.colorBk}; overflow: hidden;`);

const memberText = document.querySelector('#member');
console.log(memberText);
memberText.style.width = `${hun}vw`;
memberText.style.fontSize = `${hun/80}rem`;
memberText.style.fontWeight = `${hun*9}`;
memberText.style.textAlign = 'center';
memberText.style.paddingTop = `${hun/2}px`;

// conTwo > div4 > div4+img4 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
const textArr = ['JONNY', 'YERIN BAEK', 'HYUNGSEOK GO', 'CHIHEON KIM'];
const imgArr = ['./SVG/jonny.png', './SVG/yerin.png', './SVG/hyungseok.png', './SVG/chiheon.png'];
for (let i = 0; i < imgArr.length; i++) {
  const makeImgCon = document.createElement(appendName(conTwo));
  const makeImg = document.createElement('img');
  const makeText = document.createElement(appendName(conTwo));
  makeImgCon.classList = 'con';
  makeText.textContent = textArr[i];
  makeText.classList = 'name';
  makeImg.src = imgArr[i];
  makeImg.setAttribute('data-con', '1');
  makeImgCon.prepend(makeText, makeImg);
  conTwo.append(makeImgCon);
}
console.log(conTwo);


const divCon = conTwo.getElementsByClassName('con');
console.log(divCon);
const divcon = Array.from(divCon);
// display(divCon, 'grid');
divcon.forEach(element => display(element, 'grid'));

// 멤버별 사진 이미지 태그 부분 style
const img = conTwo.getElementsByTagName('img');
console.log(img);
const imgItemArr = Array.from(img);
console.log(imgItemArr);
imgItemArr.forEach((element, index) => {
  element.style.width = `${hun}vw`;
  element.setAttribute('style', `width: ${hun}vw; position: relative;`);
  if (index > 0) {
    let positionValue = 20;
    positionValue += positionValue * index;
    element.style.bottom = `${positionValue}vh`;
  }
});

// 멤버별 이름 텍스트 부분 style
const divName = document.getElementsByClassName('name');
console.log(divName);
const name = Array.from(divName);
console.log(name);
name.forEach((element, index) => {
  element.setAttribute('style', `position: relative; left: ${hun/10*4}vw; z-index: ${hun/50}; font-weight: ${hun*9}; font-size: ${hun/80}rem;`);
  if (index !== 0 && index === 1) {
    element.style.top = 0;
    element.style.left = '35vw';
  } else if (index === 2) {
    element.style.top = '-20vh';
    element.style.left = '32vw';
  } else if (index === 3) {
    element.style.top = '-40vh';
    element.style.left = '38vw';
  } else {
    element.style.top = '35vh';
  }
});