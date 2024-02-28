function romanNumberConverter(num){
    const map = new Map([
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ]);
    let answer = "";
    map.forEach((value, key) =>{
      while(key <= num){
        answer += "" + value;
        num -= key;
      }
    })
    return answer;
  }
  document.getElementById('convert-btn').addEventListener('click', () =>{
    let inputValue = document.getElementById('number').value;
    if(inputValue === ''){
      document.getElementById('output').innerHTML = "Please enter a valid number";
    }
    else if(inputValue < 1){
      document.getElementById('output').innerHTML = "Please enter a number greater than or equal to 1";
    }
    else if(inputValue >= 4000){
      document.getElementById('output').innerHTML = "Please enter a number less than or equal to 3999";
    }
    else{
      let result = romanNumberConverter(inputValue);
      document.getElementById('output').innerHTML = `${result}`;
    }
  });