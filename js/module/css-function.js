export function display(element, display='flex', align='center', justify='center', direction = 'row') {
  if (typeof display === 'string' && typeof align === 'string' && typeof justify === 'string') {
    element.style.display = display;
    element.style.alignItems = align;
    element.style.justifyContent = justify;
    element.style.flexDirection = direction;
    console.log(element);
  }
}

export function size(element, width, height = null){
  // element는 조건식에서 제외해주자, 값이 문자열로 들어오면 됨
  if(typeof width === 'string'){
    element.style.width = width;
    element.style.height = height;
  } else{
    console.error('parameter is not string');
  }
}

export function rotate(element, deg = 90){
  if(typeof deg === 'number'){
    element.style.transform = `rotate(${deg}deg)`;
  }
}