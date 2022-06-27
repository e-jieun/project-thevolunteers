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
    display(iconCon, 'flex', 'center', 'center');
    // !이 부분때문에 모양이
    iconCon.style.paddingLeft = 0;
    
    // iconCon > div*4
    let makeImgCon = [];
    for(let i = 0; i < 4; i++){
      makeImgCon.push('<a></a>');
    }
    console.log(makeImgCon);
    let makeImgString = makeImgCon.join('');
    console.log(makeImgString);
    iconCon.innerHTML = makeImgString;

    const imgCon = Array.from(iconCon.children);
    console.log(imgCon);

    // todo: 아이콘으로 페이지 연결 때문에 anchor 태그 연결해줘야 함 
    const imgArr = ['./SVG/youtube.svg', './SVG/spotify.svg', './SVG/twitter.svg', './SVG/soundcloud.svg'];
    const imgConHrefArr = ['https://www.youtube.com/c/thevolunteers', 'https://open.spotify.com/artist/2jLHrOkh1M5rLJgnrgfQf1', 'https://twitter.com/the__volunteers', 'https://soundcloud.com/the-volunteers-700408541'];
    imgCon.forEach((elem, index) => {
      const makeImg = document.createElement('img');
      console.dir(makeImg);
      makeImg.src = imgArr[index];
      makeImg.setAttribute('style', `width: ${hun}px; height: ${hun}px; margin: ${hun/10}px;`);
      elem.append(makeImg);
      elem.href = imgConHrefArr[index];
      // console.dir(elem[2]);
      elem.target = '_blank';
    })

    const div = conThree.getElementsByTagName('div');
    const divArr = Array.from(div);
    console.log(divArr);
    for(let i = 0; i < div.length; i++){
      if(div[i].textContent !== null && div[i].textContent !== ''){
        console.log(i);
        div[i].style.textAlign = 'center';
        if(i === 0){
          div[i].style.fontSize = `${hun/70}rem`;
          div[i].style.fontWeight = `${hun*9}`;
        }
        i === 0 ? div[i].style.fontSize = `1.5rem` : '';
      }

    }
