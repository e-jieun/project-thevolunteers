import colorObj from "./module/color.js";
import { hun } from "./module/variable.js";
import { display, size } from "./module/css-function.js";
import appendName from "./module/appendname.js"

    // #con-3
    const conThree = document.getElementById('con-3');
    console.log(conThree);
    // conThree style
    conThree.setAttribute('style',`width: ${hun}vw; height: ${hun}vh; color: ${colorObj.colorFf}; background: ${colorObj.colorBk};`);
    display(conThree, 'grid');

    // ul -> 아이콘 감싼 부모 태그
    const iconCon = conThree.querySelector('ul');
    // iconCon.style.gridTemplateRows = '1fr 1fr';
    // iconCon.style.gridTemplateColumns = '1fr 1fr';
    // => flex-wrap해서 줄바꿈해주는게 더 나을 것 같다
    iconCon.setAttribute('style',`width: ${hun*2+50}px; flex-wrap: wrap;`);
    display(iconCon);

    const imgArr = ['./SVG/youtube.svg', './SVG/spotify.svg', './SVG/twitter.svg', './SVG/soundcloud.svg'];
    for (let i = 0; i < imgArr.length; i++) {
      const makeImg = document.createElement('img');
      console.dir(makeImg);
      makeImg.src = imgArr[i];
      makeImg.setAttribute('style', `width: ${hun}px; height: ${hun}px; margin: ${hun/10}px;`);
      iconCon.append(makeImg);
    }

    const div = conThree.getElementsByTagName('div');
    console.log(div);
    for(let i = 0; i < div.length; i++){
      if(div[i].textContent !== null && div[i].textContent !== ''){
        console.log(i);
        div[i].style.textAlign = 'center';
        if(i === 1){
          div[i].style.fontSize = `${hun/70}rem`;
          div[i].style.fontWeight = `${hun*9}`;
        }
      }

    }
