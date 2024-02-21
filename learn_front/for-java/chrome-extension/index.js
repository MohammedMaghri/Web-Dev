let this_var = document.getElementById('for-save');
let input = document.getElementById('inp');
let to_here = document.getElementById('write');

let array_is = [] ;
this_var.addEventListener("click" , function(){
    array_is.push(input.value)
    to_here.innerText = ' ';
    for (let i = 0; i < array_is.length ; i++)
    if (array_is[i].length > 0)
        to_here.innerHTML += "<li>" + array_is[i] +'</li>';
    to_here.scrollTop = to_here.scrollHeight ;
});