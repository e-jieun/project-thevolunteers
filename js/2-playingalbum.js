import colorObj from "./module/color.js";
import appendName from "./module/appendname.js";
import {
  hun
} from "./module/variable.js"
import {
  display,
  size
} from "./module/css-function.js";
// variable declaration

// *

// #con-1 => now playing부터 비디오 링크 끝 
const conOne = document.getElementById('con-1');
conOne.setAttribute('style', `width: ${hun}vw;`);
// console.dir(conOne);
// 식별해준 태그의 태그 네임을 가져와 주는 부분

let conArr = [1, 2, 3, 4];
// 1. conOne에다가 아이템 태그 4개 만들어주기
// => 4개를 만들어주려면(우선 반복해야겠지) 태그 네임을 가져와서 문서에 요소로 만들어지는 아이템 태그의 이름을 태그네임으로 정해주고
// => for() 안에서 4개가 만들어지도록 반복해줘야 겠지?
for (let i = 0; i < 1; i++) {
  let makeDiv = document.createElement(appendName(conOne));
  // console.log(appendName(conOne));
  makeDiv.setAttribute('style', `width: ${hun}vw; height: ${hun/3}vh;`);
  conOne.append(makeDiv);
}
console.log(conOne);

// conOne.firstElementChild 부분
// console.log(conOne.firstElementChild);
const conOneFirst = conOne.firstElementChild;
console.log(conOneFirst);
// conOneFirst style
display(conOneFirst, 'grid', 'center', 'center');
conOneFirst.style.background = `${colorObj.colorGr}`;
conOneFirst.style.marginBottom = `${hun/20}px`;

// 2. conOne의 첫번쨰 아이템에 2개의 컨테이너 태그를 만들어주고
// conOne.firstElementChild > div*2
let itemArr = [1, 2];
for (let i = 0; i < itemArr.length; i++) {
  // 먼저 요소를 만들어주는 변수
  let makeConOneItem = document.createElement(appendName(conOne));
  // console.log(appendName(conOne));
  // 그 다음에 덧붙여주기
  makeConOneItem.setAttribute('style', `width: ${hun/10*9}vw; height: ${hun/3}%;`);
  conOneFirst.append(makeConOneItem);
}
console.log(conOneFirst.children);

// conOneFirst.children
const conOneTextCon = conOneFirst.firstElementChild;
const conTwoAlbumCon = conOneFirst.lastElementChild;
console.dir(conOneTextCon);
console.log(conTwoAlbumCon);

// 3. conOne > div:nth-child(1) > firstElementchild => text: now playing/the volunteers/___
// => conOneTextCon
// <!--*dataset 당장은 필요가 없어서 우선 주석처리-->
// conOneTextCon.setAttribute('data-firstitem',`1`);
// console.log(conOneTextCon);
// textCon의 자식요소 => text 부분
for (let i = 0; i < itemArr.length; i++) {
  const textItem = document.createElement(appendName(conOne));
  conOneTextCon.append(textItem);
}
// <!--?자식요소 두개가 만들어졌고 텍스트를 넣어야 한다-->
const text = Array.from(conOneTextCon.children);
console.log(text);
text.forEach((element, index) => {
  element.style.color = `${colorObj.colorFf}`;
  if (index % 2 === 0) {
    element.textContent = 'Now Playing'
    element.style.fontSize = `${hun/(hun/10*6)}rem`;
    element.style.fontWeight = `${hun*3}`;
  } else {
    element.textContent = 'THE VOLUNTEERS'
    element.style.fontSize = `${hun/(hun/2)}rem`;
    element.style.fontWeight = `${hun*9}`;
  }
});


// 4. conOne > div:nth-child(1) > lastElementchild => 앨범 이미지를 넣어줄 부분
// => conTwoAlbumCon
// <!--*dataset 당장은 필요가 없어서 우선 주석처리-->
// conTwoAlbumCon.setAttribute('data-firstitem',`2`);
console.log(conTwoAlbumCon);
display(conTwoAlbumCon, 'flex', 'center', 'flex-end');

// ! 다시 작성해야함, 겹쳐서 다른 곳에 들어가 버림
const albumItem = document.createElement('img');
conTwoAlbumCon.appendChild(albumItem);
// <!--!만든 태그를 식별할 때 img 태그 자체를 식별하지 않아서 생긴 문제였다 src의 값도 다 들어왔는데 안된 이유는 img 태그를 누구의 자식요소로 식별했었는데-->
const album = conTwoAlbumCon.firstElementChild;
console.dir(album);
// https://tamagotch.tistory.com/26
// https://developer.mozilla.org/ko/docs/Web/HTML/Element/img#%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC_%EA%B0%80%EC%A0%B8%EC%98%AC_%EC%88%98_%EC%97%86%EC%9D%84_%EB%95%8C
album.src = './SVG/jacket.png';
album.setAttribute('style',`width: ${hun*2}px; height: ${hun*2}px;`);