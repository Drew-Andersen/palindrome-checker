const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function checkForPalindrome(e) {
 if(input.value === ""){
   alert("Please input a value")
 } else {
   let trimInput = input.value
      .trim()
      .toLowerCase()
      .replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, "");

    if(trimInput === trimInput.split("").reverse().join("")) {
      result.innerHTML = `${input.value} is a palindrome`;
    }else {
      result.innerHTML = `${input.value} is not a palindrome`;
    }
  }
};

button.addEventListener("click", checkForPalindrome);