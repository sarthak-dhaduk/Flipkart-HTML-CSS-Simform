setInterval(myTimer, 1000);

// for timer 
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
// timer end 

// for scroll bar 
function scroll_l(){
    var left = document.querySelector('.sub_item')
    left.scrollBy(350,0)
}

function scroll_l5(){
    var left = document.querySelector('.sub_item5')
    left.scrollBy(350,0)
}

function scroll_r(){
    var right = document.querySelector('.sub_item')
    right.scrollBy(-350,0)
}

function scroll_r5(){
    var right = document.querySelector('.sub_item5')
    right.scrollBy(-350,0)
}
// scroll bar end