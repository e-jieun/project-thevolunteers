import colorObj from "./module/color.js";
import {
  hun
} from "./module/variable.js";
import appendName from "./module/appendname.js";
import {
  display,
  size,
  rotate
} from "./module/css-function.js";

// <!-- *#video-frame -->
const videoCon = document.querySelector('#video-frame');
videoCon.style.overflow = 'hidden';
// <!-- *#video-frame>div:nth-child(3)-->
const tapeCon = videoCon.lastElementChild;
console.log(tapeCon);
tapeCon.setAttribute('style', `width: ${hun}vw; height: ${hun-1}vh; border: 1px solid; display: grid; align-items: center; justify-content: space-around; position: relative; right: 4vh;`);

// <!--*.tape-con-->
console.log(tapeCon.children);
const tapeChildCon = tapeCon.children;
// <!--?테이프 부분을 겹쳐주려면 for()이나 .forEach()를 사용하면 중첩해서 사용해줘야 한다, 아니면 첫번째 tapeChildCon에만 적용이 됐다-->
const tapeChild = Array.from(tapeChildCon);
// })
// <!--*.tape-con>img를 겹쳐줄 부분-->
for (let x = 0; x < tapeChildCon.length; x++) {
  for (let i = 0; i < tapeChildCon[x].children.length; i++) {
    tapeChildCon[x].children[i].style.position = 'absolute';
  }
}
// <!--?배열이 되면 칠드런 요소가 undefined로 나온다-->
// <!--*.tape-con-->
const wheelTapeCon = document.getElementsByClassName('tape-con');
console.log(wheelTapeCon);
for (let i = 0; i < wheelTapeCon.length; i++) {
  wheelTapeCon[i].setAttribute('style', `display: flex; align-items: center; justify-content: center;`)
}

// <!-- *tape 돌아가는 움직임 -->
const wheel = [{
    transform: 'rotate(0) scale(1)'
  },
  {
    transform: 'rotate(360deg) scale(1)'
  }
];
const wheelTime = {
  duration: 3000,
  iterations: 100,
}
const tape = [{
    transform: 'rotate(360deg) scale(1)'
  },
  {
    transform: 'rotate(0) scale(1)'
  }
];
const tapeTime = {
  duration: 10000,
  iterations: 100,
}

// <!--?되긴 되는데 직접 지정해서 하는 방식말고 다른 방식으로 작성해보기-->
// <!--*img.dataset = '1' === alt='wheel', img.dataset = '0' === alt='tape'-->
const imgItem = document.getElementsByTagName('img');
console.log(imgItem);
const img = Array.from(imgItem);
console.log(img);
// <!--*wheel을 굴리면 재생되는 것처럼 움직여지도록 브라우저창에 휠 이벤트-->
window.addEventListener('wheel', function () {
  img.forEach((img, index) => {
    // data-move='1'
    if (img.dataset.move === '1') {
      img.animate(wheel, wheelTime);
      // data-move='0'
    } else {
      img.animate(tape, tapeTime);
    }
  })
})

// <!--*.videobox-con-->
const videoboxCon = document.querySelector('.videobox-con');
// <!--*data-box: 비디오 모양 박스로 구성할 태그들-->
const videoboxItem = videoboxCon.children;
const videobox = Array.from(videoboxItem);

// <!--*.videobox-con style-->
videoboxCon.setAttribute('style', `width: ${hun}vw; height: ${hun}vh; position: absolute; z-index: 2; display: grid; grid-template-columns: 9fr 1fr;`);
videobox.forEach(element => {
  if (element.dataset.box === '0') {
    element.style.border = `${hun/10*9}px solid ${colorObj.colorBk}`;
    element.textContent = '';
  } else {
    element.style.background = `${colorObj.colorGp}`;
    element.textContent = '';
  }
})

// <!--*tape title-->
const tapeTitle = document.getElementById('tape-title');
console.log(tapeTitle);
tapeTitle.setAttribute('style', `width: ${hun}vw; height: ${hun}vh; position: absolute; top: 0; z-index: 2;`);
// display속성과 그 외의 속성을 조절해주는 함수 display calling
display(tapeTitle);


const tapeTitleBg = document.createElement(appendName(tapeTitle));
console.dir(tapeTitleBg);
tapeTitleBg.classList = 'tape-bg-con';
tapeTitle.appendChild(tapeTitleBg); //자식요소로 div가 생겼다
console.log(tapeTitle);

// <!--todo: append한 자식요소를 식별하기 => titleBg-->
// title img와 div text를 감싸는 컨테이너 배경 부분
const titleBg = document.querySelector('.tape-bg-con');
console.log(titleBg);

// <!--todo: 배경 크기 스타일링-->
titleBg.setAttribute('style', `width: 40vmax; height: 14vmax; background: ${colorObj.colorFf}; border-radius: 20px; padding: 20px;`);
display(titleBg, 'flex', 'center', 'center', 'column');
rotate(titleBg);
titleBg.style.rowGap = '2vh';
titleBg.style.textAlign = 'center';
titleBg.style.color = colorObj.colorDp;
titleBg.style.position = 'relative';
titleBg.style.right = '2vh';

const makeImg = document.createElement(appendName(tapeTitleBg));
const makeTitle = document.createElement(appendName(tapeTitleBg));
console.log(tapeTitleBg);
makeImg.textContent = 'THE VOLUNTEERS';
makeImg.style.fontFamily = 'League Gothic, sans-serif';

makeTitle.textContent = ':더 발룬티어스';

makeTitle.style.fontFamily = 'Black Han Sans, sans-serif';

// prepend(img+div)
titleBg.append(makeImg, makeTitle);


const titleTVT = titleBg.firstElementChild;
console.log(titleTVT);
size(titleTVT, `${hun/1}vw`);
titleTVT.style.fontSize = '4.5rem';

const titleTVTSmall = titleBg.lastElementChild;
console.log(titleTVTSmall);