"use strict"

let countb =  document.getElementById("count-el")
let  for_svp = document.getElementById("svp")
let  for_save = document.getElementById("save")
let for_first = document.getElementById('myInput');
let for_sec = document.getElementById("sec");
let out_put = document.getElementById("out");
// for_save.addEventListener("click", event => { 

// }};


console.log(for_first);
console.log(countb);
console.log(for_svp);

var index = 0;

function save(index)
{
    let flag = index
    return flag ;
}


function forest()
{
    index = 0
    countb.innerText = 0
}
function forplus()
{
    index = index +  1
    console.log(save(index))
    countb.innerText = index
}

function for_put()
{
    if (index == 0)
        return ;
    for_svp.innerText = index
}

function for_elenent()
{
    out_put.innerText 
}
