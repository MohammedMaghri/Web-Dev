let this_input = document.getElementById('wrin');
let the_butt  = document.getElementById('sub');
let put = document.getElementById('here');


let stock_array = []
put.scrollTop = put.scrollHeight ;
the_butt.addEventListener("click" ,function(){
    stock_array.push(this_input.value);
    put.innerHTML = ""
    for(let i = 0; i < stock_array.length; i++)
        if (stock_array[i].length > 0)
            put.innerHTML += "<li>" + stock_array[i] + "</li>"
});