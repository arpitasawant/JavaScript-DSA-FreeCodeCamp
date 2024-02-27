const btn = document.querySelector('#check-btn');
const output = btn.addEventListener('click',() => {
  const text = document.querySelector('#text-input').value;
  if (text.length === 0){
    alert("Please input a value");
    return;
  }
  const cleanedText = text.split('').filter((element) => {
    return element.match(/^[a-zA-Z0-9]+$/) !== null ? element : ''
  })
  const lowerText = cleanedText.join("").toLowerCase();
  if (lowerText.split("").reverse().join("") === lowerText){
    document.querySelector('#result').innerHTML = `${text} is a palindrome`;
  }else{
    document.querySelector('#result').innerHTML = `${text} is not a palindrome`;
  }
})









