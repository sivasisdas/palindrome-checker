const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click",check);

function check(){
    const str = input.value.trim();

    if(str.length == 0 ){
        result.textContent="Input Cannot be Empty"
        return;
    }
    const cleanStr = str.replaceAll(/[^A-Za-z0-9]/g,"").toLowerCase();
    console.log(cleanStr); 

    const isPalindrome = cleanStr === cleanStr.split("").reverse("").join("");

    const message = isPalindrome ? result.textContent="It's a Palindrom!" : result.textContent="It's not a Palindrom!"
    
    result.classList.remove("text-success","text-danger")

    result.innerHTML =message;
    result.classList.add(isPalindrome?"text-success":"text-danger");
}
