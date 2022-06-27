function appendName(element){
  if(element.tagName !== null && element.tagName !== ''){
    return element.tagName;
  }
}

export default appendName;