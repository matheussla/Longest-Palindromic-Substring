const s = 'wegeeksskeegyuwe'

function expandCenter(left, right) {
  while((left >= 0 && right < s.length && s[left] === s[right]) && (right - left + 1) <= 100){
    left--
    right++
  }

  return [left + 1, right -1]
}

function longestPalindrome(text) {
  if(!text || text.length < 2) return null

  let maxLen = 0
  let startIdx = 0

  for (let i = 0; i< text.length; i++) {
    let [left1, right1] = expandCenter(i, i)
    
    if(right1 - left1 + 1 > maxLen && right1 - left1 + 1 >= 2) {
      maxLen = right1 - left1 + 1
      startIdx = left1
    }

    let [left2, right2] = expandCenter(i, i + 1)
    if(right2 - left2 + 1 > maxLen && right2 - left2 + 1 >= 2) {
      maxLen = right2 - left2 + 1
      startIdx = left2
    }
  }

  if(maxLen < 2) return null
  return text.substring(startIdx, startIdx + maxLen)
}


console.log(longestPalindrome(s))