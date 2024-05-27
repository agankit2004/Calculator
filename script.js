const answer = document.getElementById('display');
function removeCharacter(str) {
    let n = str.length;
    let newString = "";
    for (let i = 0; i < n - 1; i++) {
        newString += str[i];
    }
    return newString;
}
function append(key){
    answer.value +=  key;
  
}
function erase(){
    answer.value = ""; 
    // alert("hello");  
}
function remove(){
    answer.value = removeCharacter(answer.value);
}
function display(){
   answer.value = eval(answer.value)
}
