const result = document.getElementById('result')

function insertNum(num) {
  let lastNum = result.innerHTML
  result.innerHTML = lastNum + num
}

function clean() {
  result.innerHTML = ''
}

function backSpace() {
  let beforeResult = document.getElementById('result').innerHTML
  result.innerHTML = beforeResult.substring(0, beforeResult.length - 1)
}

function calc() {
  let beforeResult = document.getElementById('result').innerHTML

  if (beforeResult) {
    result.innerHTML = eval(beforeResult)
  } else {
    result.innerHTML = 'Invalid'
  }
}